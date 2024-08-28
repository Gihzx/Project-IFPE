import relogio from "../../../assets/Captura_de_tela_2024-08-28_055659-removebg-preview.png";
import { Butao } from "../../atoms/botao";
import "./style.css";

function SectionCompras() {
  const value = "Comprar";
  return (
    <>
      <section className="Conatiner-Section">
        <div className="cardContainer">
          <div className="card-1 "></div>

          <div className="card-1">
            <img src={relogio} alt="relogio" className="imgCards" />
            <div>
              <p>Relogio casual lenovo</p>
            </div>
            <div>$79,99</div>
            <Butao typeBtn={value} />
          </div>
          <div className="card-1">
            <img src={relogio} alt="relogio" className="imgCards" />
            <div>
              <p>Relogio casual lenovo</p>
            </div>
            <div>$79,99</div>
            <Butao typeBtn={value} />
          </div>
          <div className="card-1">
            <img src={relogio} alt="relogio" className="imgCards" />
            <div>
              <p>Relogio casual lenovo</p>
            </div>
            <div>$79,99</div>
            <Butao typeBtn={value} />
          </div>
          <div className="card-1">
            <img src={relogio} alt="relogio" className="imgCards" />
            <div>
              <p>Relogio casual lenovo</p>
            </div>
            <div>$79,99</div>
            <Butao typeBtn={value} />
          </div>
          <div className="card-1">
            <img src={relogio} alt="relogio" className="imgCards" />
            <div>
              <p>Relogio casual lenovo</p>
            </div>
            <div>$79,99</div>
            <Butao typeBtn={value} />
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionCompras;
