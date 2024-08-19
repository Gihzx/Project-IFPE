import "./AlterarSenha.css";
import Logo from "../../assets/logo-sm.svg";

function AlterarSenha() {
  return (
    <div className="container-page">
      <div className="container-logo-form">
        <img src={Logo} alt="Lion Eletronics logo" />
        <h5>Lion Eletronics </h5>
      </div>

      <div className="container-form">
        <h5>Altera Senha</h5>

        <p>
          Enviamos para o e-mail informado um link para redefinição de senha.
        </p>
        <div className="row">
          <button
            type="button"
            className="btn waves-effect waves-light btn-submit"
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
}
export default AlterarSenha;
