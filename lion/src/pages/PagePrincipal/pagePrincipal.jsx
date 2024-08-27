import "./style.css";
import NavHome from "../../components/molecules/navBarHome/navHome";
import rectagle1 from "../../assets/Rectangle 45.svg";
import rectagle2 from "../../assets/Rectangle 51 (1).svg";
import rectagle3 from "../../assets/Rectangle 50.svg";
import rectagle4 from "../../assets/Rectangle 52.svg";
import imgSection from "../../assets/equipe-de-designers-digitais-desenhando-com-caneta-no-monitor-do-computador.png";
import Footer from "../../components/molecules/footer/footer";
import celular from "../../assets/Rectangle 53.svg";
import elipse from "../../assets/Ellipse 1.svg";

function PagePrincipal() {
  return (
    <>
      <NavHome />
      <section className="section-one">
        <div className="text-section-one">
          <div>
            <h1>Lion Eletronics</h1>
            <h2>Um mundo de possibilidade para sua compra</h2>
            <button className="bntComprar">Compre já</button>
          </div>

          <img src={imgSection} alt="img" className="avata" />
        </div>
      </section>
      <div className="row-orage"></div>
      <section>
        <div className="photo-h1">
          <div>
            <h1>Navegador por categria</h1>
          </div>
          <div className="categoria-name">
            <img src={rectagle1} alt="fotografia" className="photo" />
            <img src={rectagle2} alt="controle" className="photo" />
            <img src={rectagle3} alt="fone" className="photo" />
            <img src={rectagle4} alt="relogio" className="photo" />
          </div>
        </div>
      </section>
      <section>
        <div className="celula-ciculo">
          <img src={celular} alt="celular" className="celular" />
          <img src={elipse} alt="ciculo" className="circulo" />
        </div>
      </section>
      <Footer />
    </>
  );
}
export default PagePrincipal;
