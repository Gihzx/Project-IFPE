import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/molecules/navBar/NavBar";
import Carrosel from "../../components/molecules/carrossel/Carrosel";
import "./produtoStyle.css";
import Home from "../../Home";

function ProdutosPages() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 
  const navigate = useNavigate(); // Hook para redirecionar para a página de descrição do produto

  // Função para lidar com o clique no produto
  const handleProdutoClick = (idProduto) => {
    navigate(`/descricao/${idProduto}`); // Redireciona para a página de descrição do produto
  };

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} />
      <section className="photo-h1">
        <Carrosel setCategory={setSelectedCategory} />
      </section>
      <div className="section">
        {/* Passa as funções de busca por categoria e termo */}
        <Home category={selectedCategory} searchTerm={searchTerm} onProdutoClick={handleProdutoClick} />
      </div>
    </>
  );
}

export default ProdutosPages;
