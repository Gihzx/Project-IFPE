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
        <form>
          <div className="container-items-form">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="validate" />
          </div>
        </form>

        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </div>
    </div>
  );
}

export default RecuperarSenha;
