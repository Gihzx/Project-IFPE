import { useState } from "react";
import "./RegistrarConta.css";
import "../../GlobalStylesForm.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-sm.svg";

function RegistrarConta() {
  const [step, setStep] = useState(1);

  const nextToStep = () => {
    setStep((prevState) => prevState + 1);
    console.log(step);
  };

  const backToStep = () => {
    setStep((prevState) => prevState - 1);
    console.log(step);
  };

  return (
    <div className="container-page">
      <div className="container-logo-form">
        <img src={Logo} alt="logo" />
        <h5>Lion Eletronics </h5>
      </div>

      <div className="container-form">
        <h6>Registrar Conta</h6>

        <form>
          {step <= 1 ? (
            <>
              <div className="container-items-form">
                <label htmlFor="Nome">Nome</label>
                <input id="Nome" type="text" className="validate" />
              </div>

              <div className="container-items-form">
                <label htmlFor="endereco">Endereco</label>
                <input id="endereco" type="text" className="validate" />
              </div>

              <div className="container-items-form">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="validate" />
              </div>
            </>
          ) : (
            <>
              <div className="container-items-form">
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" className="validate" />
              </div>

              <div className="container-items-form">
                <label htmlFor="confirm-password">Senha Novamente</label>
                <input
                  id="confirm-password"
                  type="password"
                  className="validate"
                />
              </div>
            </>
          )}
        </form>

        {step <= 1 ? (
          <button type="button" className="btn-submit" onClick={nextToStep}>
            Próximo
          </button>
        ) : (
          <div className="container-buttons-form">
            <button type="button" className="btn-submit" onClick={backToStep}>
              Anterior
            </button>
            <Link to="/produtoPages">
              <button type="submit" className="btn-submit">
                Registrar
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default RegistrarConta;
