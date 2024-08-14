import "./login.css";
import Logo from "../../assets/LeonsEletronico.jpg";

function AlterarSenha() {
  return (
    <div className="container-page">
      <div className="container-logo-form">
        <img src={Logo} alt="" />
        <h5>Lion Eletronics </h5>
      </div>

      <div className="container-form">
        <h5>Altera Senha</h5>
       <div className="row">
            

          <button
            type="submit"
            className="btn waves-effect waves-light btn-submit"
          >
            Enviar
          </button>
          </div> 
      </div>
    </div>
  );
}
export default AlterarSenha;