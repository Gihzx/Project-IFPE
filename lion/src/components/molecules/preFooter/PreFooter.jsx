import "./style.css";
import { CiCreditCard1 } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { GoIssueClosed } from "react-icons/go";
function PreFooter() {
  return (
    <>
      <section>
        <div className="container-preFooter">
          <div>
            <h5>Cliente satisfatorio</h5>
            <p>
              <TbPigMoney /> Garantia de compra ou seu dinheiro de volta!
            </p>
          </div>
          <div>
            <h5>Pagamento seguro</h5>
            <p>
              <CiCreditCard1 size={23} /> Aceitamos todos os tipos de cartão
            </p>
          </div>
          <div>
            <h5>Suporte ao cliente</h5>
            <p>
              {" "}
              <BsTelephone size={17} />
              Atendimento 24hr
            </p>
          </div>
          <div>
            <h5>Suporte ao vendedor </h5>
            <p>
              {" "}
              <GoIssueClosed />
              Segurança na sua venda
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default PreFooter;
