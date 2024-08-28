import { Link } from "react-router-dom";
import NavBar from "../../../components/molecules/navBar/NavBar";
function TabelaEstoque() {
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
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Estoque minimo</th>
            <th>Estoque atual</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nome do produto</td>
            <td>Categoria</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Marca do produto</td>
            <td>Categoria</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Marca do produto</td>
            <td>Categoria</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>

      <h5>Estoque</h5>
    </>
  );
}
export default TabelaEstoque;
