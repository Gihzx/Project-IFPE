import "./AlterarSenha.css";
import "../../GlobalStylesForm.css";
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
          Você recebeu um e-mail com um link para redefinir sua senha. Abra o
          e-mail e siga o link para criar uma nova senha.
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
