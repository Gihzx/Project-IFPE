import "./RegistrarConta.css";
import "../../GlobalStylesForm.css";
import Logo from "../../assets/logo-sm.svg";

function RegistrarConta() {
  return (
    <div className="container-page">
      <div className="container-logo-form">
        <img src={Logo} alt="logo" />
        <h5>Lion Eletronics </h5>
      </div>

      <div className="container-form">
        <h6>Registrar Conta</h6>

        <form>
          <div className="row">
            <div className="input-field col s12">
              <input id="Nome" type="text" className="validate" /> 
              <label htmlFor="Nome">Nome</label>
            </div>

            <div className="row">
              <div className="input-field col s12 endereco">
                <input id="endereco" type="text" className="validate" />
                <label htmlFor="endereco">Endereco</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Senha</label>
            </div>
          </div>
          
          <div className="row">
            <div className="input-field col s12">
              <input id="confirm-password" type="password" className="validate" />
              <label htmlFor="confirm-password">Senha Novamente</label>
            </div>
          </div>

          <button
            type="submit"
            className="btn waves-effect waves-light btn-submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegistrarConta;
