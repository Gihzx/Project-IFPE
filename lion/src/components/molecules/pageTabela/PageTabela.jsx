import { Link } from "react-router-dom";
import "./style.css";
import NavBar from "../navBar/NavBar";
function PageTabela() {
  return (
    <>
      <NavBar />
      <div className="ContainerTabela">
        <div className="item">
          <Link to="/relatorio">
            <span>Relatorio</span>
          </Link>
        </div>

        <div className="item">
          <Link to="/estoque">
            <span>Estoque</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/produto">
            <span>Produto</span>
          </Link>
        </div>
      </div>
    </>
  );
}
export default PageTabela;
