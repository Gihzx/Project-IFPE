import "./style.css";
import Cards from "../cards/Cards";

function SectionCompras() {
  return (
    <>
      <section className="Conatiner-Section-Cards">
        <div className="cardContainer-Section">
          <h1 className="h1">Produtos mais vendido</h1>
          <Cards />
        </div>
      </section>
    </>
  );
}
export default SectionCompras;
