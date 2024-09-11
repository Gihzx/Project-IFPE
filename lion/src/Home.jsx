import { useState, useEffect } from "react";
import Card from "./components/atoms/Card";
import api from "./api";
function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    handleFecht();
  }, []);

  const handleFecht = async () => {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error(`erro ao bucar produtos ${error}`);
    }
  };
  return (
    <>
      <div className="container-card-produtos">
        {produtos.map((produto) => (
          <Card
            key={produto.idProduto}
            data={produto}
            url={produto.url}
            nome={produto.nomeProduto}
            preco={produto.preco}
          />
        ))}
      </div>
    </>
  );
}
export default Home;
