import Logo from "../../assets/logo-sm.svg";
import "../../GlobalStylesForm.css";

function RecuperarSenha() {
  return (
    <div className="container-page">
      <div className="container-logo-form">
        <img src={Logo} alt="" />
        <h5>Lion Eletronics </h5>
      </div>

      <div className="container-form">
        <h6>Recuperar Senha</h6>

        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <button
          type="submit"
          className="btn waves-effect waves-light btn-submit"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default RecuperarSenha;
