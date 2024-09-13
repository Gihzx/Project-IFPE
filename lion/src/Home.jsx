import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para redirecionamento
import Card from "./components/atoms/Card";
import api from "./api";

function Home({ searchTerm = "", category = "" }) {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate(); // Hook para redirecionar para outra rota

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

  // Filtro por termo de busca (input do NavBar)
  const filteredProducts = produtos.filter((produto) => {
    const nomeProduto = produto.nomeProduto || "";
    return nomeProduto.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Filtro por categoria (caso não tenha searchTerm)
  const filteredCategories = produtos.filter((produto) => {
    const categoriaProduto = produto.categoria || "";
    return category
      ? categoriaProduto.toLowerCase() === category.toLowerCase()
      : true;
  });

  // Exibe os produtos filtrados por busca se houver um termo no searchTerm, caso contrário exibe por categoria
  const produtosParaMostrar = searchTerm
    ? filteredProducts
    : filteredCategories;

  // Função para redirecionar ao clicar no produto
  const handleProdutoClick = (idProduto) => {
    navigate(`/descricao/${idProduto}`); // Redireciona para a página de detalhes do produto
  };

  return (
    <>
      <div className="container-card-produtos">
        {produtosParaMostrar.length > 0 ? (
          produtosParaMostrar.map((produto) => (
            <Card
              key={produto.idProduto}
              idProduto={produto.idProduto}
              url={produto.url}
              nome={produto.nomeProduto}
              preco={produto.preco}
              onClick={() => handleProdutoClick(produto.idProduto)} 
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
