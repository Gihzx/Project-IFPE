import { useState, useEffect } from "react";
import Card from "./components/atoms/Card";
import api from "./api";

function Home({ searchTerm = "", category = "" }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    handleFecht();
  }, []);

  const handleFecht = async () => {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error(`Erro ao buscar produtos: ${error}`);
    }
  };

  // Filtro para os produtos com base na categoria e no termo de busca
  const filteredProducts = produtos.filter((produto) => {
    const nomeProduto = produto.nomeProduto || ""; // Garante que o valor seja uma string
    const categoriaProduto = produto.categoria || ""; // Garante que a categoria também seja uma string

    const matchesCategory = category ? categoriaProduto.toLowerCase() === category.toLowerCase() : true;
    const matchesSearchTerm = nomeProduto.toLowerCase().includes(searchTerm.toLowerCase());

    // Retorna verdadeiro apenas se o produto corresponder ao termo de pesquisa e à categoria
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <>
      <div className="container-card-produtos">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((produto) => (
            <Card
              key={produto.idProduto}
              url={produto.url}
              nome={produto.nomeProduto}
              preco={produto.preco}
            />
          ))
        ) : (
          <p>Produto indisponível</p>
        )}
      </div>
    </>
  );
}

export default Home;
