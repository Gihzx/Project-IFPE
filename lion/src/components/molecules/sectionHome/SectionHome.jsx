import iphone from "../../../assets/elo_payment_method_card_icon_142740 1.png";
import "./style.css";
function SectionHome() {
  return (
    <>
      <section className="section">
        <div className="section-oferta">
          <div>
            <h1>Até 25% de desconto, confira!</h1>
            {/* <button className="bntComprar1">Compre já</button> */}
          </div>
          <div>
            <img src={iphone} alt="iphone" />
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionHome;
