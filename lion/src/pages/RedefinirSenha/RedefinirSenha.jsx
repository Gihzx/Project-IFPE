import "./RedefinirSenha.css";  
import "../../GlobalStylesForm.css";
import Logo from "../../assets/logo-sm.svg";

function RedefinirSenha() {
  return (
    <div className="container-page">
      <div className="container-logo-form">
        <img src={Logo} alt="" />
        <h5>Lion Eletronics </h5>
      </div>

      <div className="container-form">
        <h6>Redefinir Senha</h6>

        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Nova Senha</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="Digite-novamente" type="password" className="validate" />
            <label htmlFor="Digite-novamente">Digite novamente:</label>
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
export default RedefinirSenha;
