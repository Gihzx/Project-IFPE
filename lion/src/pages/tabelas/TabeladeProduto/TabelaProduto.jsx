import { Link } from "react-router-dom";
import NavBar from "../../../components/molecules/navBar/NavBar";
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import api from "../../../api";
import "./style.css";
import { useEffect, useState } from "react";
function TabelaProduto() {
  const [nomeProduto, setNomeProduto] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [fichaTecnica, setfichaTecnica] = useState("");
  const [status_disponibilidade, setStatus_disponibilidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.log(`error ao bucar dados ${error}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se o preço é um número válido
    if (isNaN(preco) || preco.trim() === "") {
      alert("Por favor, insira um preço válido");
      return;
    }

    const novoProduto = {
      nomeProduto,
      modelo,
      marca,
      preco: parseFloat(preco),
      descricao,
      quantidade,
      status_disponibilidade,
      categoria,
      fichaTecnica,
    };

    try {
      // Enviando o objeto "novoProduto" para o backend
      await api.post("/produtos", novoProduto);

      // Adiciona o novo produto ao estado local
      setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);
      console.log(novoProduto);
      // Limpa os campos do formulário após o envio
      setNomeProduto("");
      setModelo("");
      setMarca("");
      setPreco("");
      setDescricao("");
      setQuantidade("");
      setStatus_disponibilidade("");
      setCategoria("");
      setfichaTecnica("");
    } catch (error) {
      console.log(`Erro ao adicionar produto: ${error}`);
    }
  };

  const handleDelete = async (idProduto) => {
    try {
      await api.delete(`/produtos/${idProduto}`);
      fetchProdutos();
    } catch (error) {
      console.log(`Erro ao excluir dados: ${error}`);
    }
  };
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
      <section>
        <form onSubmit={handleSubmit}>
          <div className="forms-produtos">
            <div className="item">
              <input
                type="text"
                placeholder="Nome Produto"
                value={nomeProduto}
                onChange={(e) => setNomeProduto(e.target.value)}
              />
              <input
                type="text"
                placeholder="modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
              <input
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço"
              />
            </div>
            <div className="item">
              <textarea
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
              <input
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
              <label htmlFor="">
                <select
                  name=""
                  id=""
                  value={status_disponibilidade}
                  onChange={(e) => setStatus_disponibilidade(e.target.value)}
                >
                  <option value="1">Disponivel</option>
                  <option value="2">Indisponivel</option>
                </select>
              </label>
              <label htmlFor="">Categoria</label>
              <select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="1">Celular</option>
                <option value="2">Computador</option>
                <option value="3">Fones</option>
                <option value="4">Televisão</option>
                <option value="5">Notbook</option>
              </select>
              <input
                type="text"
                placeholder="Ficha tecnica"
                onChange={(e) => setfichaTecnica(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="button-Adicionar">
            Adicionar +
          </button>
        </form>
      </section>

      <table>
        <thead>
          <tr>
            <th>Nome do produto</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Qnt</th>
            <th>FichaTecnica</th>
            <th>Categoria</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index}>
              <td>{produto.nomeProduto}</td>
              <td>{produto.marca}</td>
              <td>{produto.modelo}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.fichaTecnica}</td>
              <td>{produto.categoria}</td>
              <td>{produto.status_disponibilidade}</td>

              <td className="icones-react">
                <TiPencil />
                <RiDeleteBin6Line
                  onClick={() => handleDelete(produto.idProduto)}
                />
                <FcCheckmark />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default TabelaProduto;
