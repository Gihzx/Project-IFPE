import { useState } from "react";
import NavBar from "../../components/molecules/navBar/NavBar";
import Carrosel from "../../components/molecules/carrossel/Carrosel";
import "./produtoStyle.css";
import Home from "../../Home";

function ProdutosPages() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 
  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} />
      <section className="photo-h1">
        <Carrosel setCategory={setSelectedCategory} />
      </section>
      <div className="section">
        <Home category={selectedCategory} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default ProdutosPages;
