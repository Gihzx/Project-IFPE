import "./login.css";
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

        <div className="row"></div>
        <form>
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

          <button
            type="submit"
            className="btn waves-effect waves-light btn-submit"
          >
            Acessar
          </button>
        </form>

        <span className="container-link-form">
          <a href="/registrar-conta">Registrar-se</a>
          <a href="/recuperar-senha">Esqueceu a senha</a>
        </span>
      </div>
    </div>
  );
}
export default Login;
