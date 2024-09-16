import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/molecules/navBar/NavBar";
import Carrosel from "../../components/molecules/carrossel/Carrosel";
import PagePrincipal from "../PagePrincipal/pagePrincipal";
import Footer from "../../components/molecules/footer/footer";
import SectionHome from "../../components/molecules/sectionHome/SectionHome";
import PreFooter from "../../components/molecules/preFooter/PreFooter";
import "./produtoStyle.css";
import Home from "../../Home";

function ProdutosPages() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleProdutoClick = (idProduto) => {
    navigate(`/descricao/${idProduto}`);
  };

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} />
      <PagePrincipal />
      <section className="photo-h1">
        <Carrosel setCategory={setSelectedCategory} />
      </section>

      <div className="section">
        <Home
          category={selectedCategory}
          searchTerm={searchTerm}
          onProdutoClick={handleProdutoClick}
        />
      </div>
      <SectionHome />
      <PreFooter />
      <Footer />
    </>
  );
}

export default ProdutosPages;
