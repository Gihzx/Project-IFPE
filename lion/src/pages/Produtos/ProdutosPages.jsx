import NavBar from "../../components/molecules/navBar/NavBar";
import Carrosel from "../../components/molecules/carrossel/Carrosel";
import "./produtoStyle.css";
import Home from "../../Home";

function ProdutosPages() {
  return (
    <>
      <NavBar />
      <section className="photo-h1  ">
        <Carrosel />
      </section>{" "}
      <div className="section">
        <Home />
      </div>
    </>
  );
}
export default ProdutosPages;
