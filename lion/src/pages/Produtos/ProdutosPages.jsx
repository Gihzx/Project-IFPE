import { useState } from "react";
import NavBar from "../../components/molecules/navBar/NavBar";
import Carrosel from "../../components/molecules/carrossel/Carrosel";
import "./produtoStyle.css";
import Home from "../../Home";

function ProdutosPages() {
  // Estado para armazenar a categoria selecionada e o termo de busca
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Adiciona o estado para o termo de busca

  return (
    <>
      {/* Passa a função para atualizar o searchTerm na NavBar */}
      <NavBar setSearchTerm={setSearchTerm} />
      <section className="photo-h1">
        {/* Passa a função setSelectedCategory para o Carrosel */}
        <Carrosel setCategory={setSelectedCategory} />
      </section>
      <div className="section">
        {/* Passa o searchTerm e a categoria para o componente Home */}
        <Home category={selectedCategory} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default ProdutosPages;
