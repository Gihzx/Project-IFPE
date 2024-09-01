import NavBar from "../../components/molecules/navBar/NavBar";
import imgCategory from "../../assets/relogio-ifpe-removebg-preview.png";
import imgCategory2 from "../../assets/relogio-ifpe-removebg-preview.png";
import imgCategory3 from "../../assets/Captura_de_tela_2024-08-30_005129-removebg-preview.png";
import imgCategory4 from "../../assets/imgPhone.png";
import "./produtoStyle.css";

function ProdutosPages() {
  return (
    <>
      <NavBar />
      <section className="cardsUser">
        <div className="imgCategory">
          <img src={imgCategory} alt="imgCategory" />
          <h4>Gamer</h4>
        </div>
        <div className="imgCategory">
          <img src={imgCategory2} alt="imgCategory2" />
          <h4>Relogio</h4>
        </div>
        <div className="imgCategory">
          <img src={imgCategory3} alt="imgCategory3" height={200} />
          <h4>Fone</h4>
        </div>
        <div className="imgCategory">
          <img src={imgCategory4} alt="imgCategory4" height={200} />
          <h4>Celulares</h4>
        </div>
      </section>
    </>
  );
}
export default ProdutosPages;
