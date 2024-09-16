import { Link } from "react-router-dom";
import NavBar from "../../../components/molecules/navBar/NavBar";
import { useState, useEffect } from "react";
import api from "../../../api";
function TabelaEstoque() {
  const [protdutos, setProdutos] = useState([]);

  useEffect(() => {
    handleGet();
  }, []);
  const handleGet = async () => {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.log(`erro ao buscar produtos ${error}`);
    }
  };
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
            <th>Código</th>
            <th>Nome produto</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Estoque atual</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {protdutos.map((produto, index) => (
            <tr key={index}>
              <th>{produto.idProduto}</th>
              <td>{produto.nomeProduto}</td>
              <td>{produto.marca}</td>
              <td>{produto.categoria}</td>
              <th>{produto.quantidade}</th>
              <td>{produto.status_disponibilidade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5>Estoque</h5>
    </>
  );
}
export default TabelaEstoque;
