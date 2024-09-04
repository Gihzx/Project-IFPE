import { useState, useEffect } from "react";
import Card from "./components/atoms/Card";

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = () => {
      const produtosData = [
        { id: 1, nome: "Produto 1", preco: 10.0 },
        { id: 2, nome: "Produto 2", preco: 20.0 },
        { id: 3, nome: "Produto 3", preco: 30.0 },
        { id: 4, nome: "Produto 3", preco: 30.0 },
        { id: 5, nome: "Produto 3", preco: 30.0 },
        { id: 6, nome: "Produto 3", preco: 30.0 },
        { id: 7, nome: "Produto 3", preco: 30.0 },
        { id: 8, nome: "Produto 3", preco: 30.0 },
        { id: 9, nome: "Produto 3", preco: 30.0 },
        { id: 10, nome: "Produto 3", preco: 30.0 },
        { id: 10, nome: "Produto 3", preco: 30.0 },
        { id: 10, nome: "Produto 3", preco: 30.0 },
      ];
      setProdutos(produtosData);
    };

    fetchProdutos();
  }, []);

  return (
    <>
      <div className="container-card-produtos">
        {produtos.map((produto) => (
          <Card nome={produto.nome} preco={produto.preco} key={produto.id} />
        ))}
      </div>
    </>
  );
}
export default Home;
