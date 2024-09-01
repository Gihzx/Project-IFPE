import "./style.css";
import NavHome from "../../components/molecules/navBarHome/navHome";
import rectagle4 from "../../assets/Rectangle 226.png";
import imgSection from "../../assets/relogio-ifpe-removebg-preview.png";
import rectagle1 from "../../assets/imgPhone.png";
import rectagle2 from "../../assets/Captura_de_tela_2024-08-30_005129-removebg-preview.png";
import rectagle3 from "../../assets/Rectangle 227.png";
import SectionHome from "../../components/molecules/sectionHome/SectionHome";
import Footer from "../../components/molecules/footer/footer";
import SectionCompras from "../../components/molecules/sectionCompras";
import PreFooter from "../../components/molecules/preFooter/PreFooter";
function PagePrincipal() {
  return (
    <>
      <NavHome />
      <main className="section-one">
        <div className="text-section-one">
          <div>
            <h1>Lion Eletronics</h1>
            <h2>Um mundo de possibilidade para sua compra</h2>
            <button className="bntComprar">Compre já</button>
          </div>
          <img src={imgSection} alt="img" className="avata" />
        </div>
      </main>
      <div className="rowOorage"></div>
      <section>
        <div className="photo-h1">
          <h1>Navegador por categria</h1>
          <div className="categoria-name">
            <img src={rectagle4} alt="relogio" className="photo" />
            <img src={rectagle1} alt="fotografia" className="photo" />
            <img src={rectagle2} alt="controle" className="photo" />
            <img src={rectagle3} alt="fone" className="photo" />
          </div>
        </div>
      </section>
      <SectionCompras />
      <SectionHome />
      <PreFooter />
      <Footer />
    </>
  );
}
export default PagePrincipal;
