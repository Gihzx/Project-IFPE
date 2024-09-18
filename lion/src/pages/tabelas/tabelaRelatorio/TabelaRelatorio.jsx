import { Link } from "react-router-dom";
import NavBar from "../../../components/molecules/navBar/NavBar";
function TabelaRelatorio() {
  return (
    <>
      <NavBar />
      <div className="ContainerTabela">
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
            <th>Nome do produto</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Qnt</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome do produto</td>
            <td>Marca do produto</td>
            <td>Categoria</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Nome do produto</td>
            <td>Marca do produto</td>
            <td>Categoria</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Nome do produto</td>
            <td>Marca do produto</td>
            <td>Categoria</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default TabelaRelatorio;
