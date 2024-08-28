import img from "../../../assets/logo-sm.svg";
import { Link } from "react-router-dom";
import "./navHomeStyle.css";
function NavHome() {
  return (
    <>
      <div className="navBarHome">
        <div className="nav">
          <img src={img} alt="logo" className="logo" />
          <div className="names">
            <p>Home</p>
            <p>Contatos</p>
            <p>FAQ</p>
          </div>
          <div className="button">
            <Link to="/login">
              <button className="login">login</button>
            </Link>
            <div className="button">
              <Link to="/">
                <button className="cadastrar">Cadastrar</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="rowOrageone">
          <p>Categorias</p>
          <p>Ofertas</p>
          <p>Nossos produtos</p>
          <p>Seja parceiro</p>
        </div>
      </div>
    </>
  );
}
export default NavHome;
