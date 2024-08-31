import "./login.css";
import "../../GlobalStylesForm.css";
import Logo from "../../assets/logo-sm.svg";

function Login() {
  return (
    <div className="container-page">
      <div className="container-logo-form">
        <img src={Logo} alt="" />
        <h5>Lion Eletronics </h5>
      </div>
      <div className="container-form">
        <h3>Login</h3>
        <form>
          <div className="container-items-form">
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" className="validate" />
          </div>

          <div className="container-items-form">
            <label htmlFor="password">Senha: </label>
            <input id="password" type="password" className="validate" />
          </div>
        </form>

        <button type="submit" className="btn-submit">
          Acessar
        </button>

        <span className="container-link-form">
          <a href="/registrar-conta">Registrar-se</a>
          <a href="/recuperar-senha">Esqueceu a senha</a>
        </span>
      </div>
    </div>
  );
}
export default Login;
