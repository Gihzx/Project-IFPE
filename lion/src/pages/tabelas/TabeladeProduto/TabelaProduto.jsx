import { Link } from "react-router-dom";
import NavBar from "../../../components/molecules/navBar/NavBar";
import { RiDeleteBin6Line } from "react-icons/ri";
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
  const [url, setUrl] = useState("");
  const [status_disponibilidade, setStatus_disponibilidade] =
    useState("indefinido");
  const [categoria, setCategoria] = useState("indefinido");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nomeProduto ||
      !modelo ||
      !marca ||
      isNaN(preco) ||
      preco.trim() === "" ||
      isNaN(quantidade) ||
      !url
    ) {
      alert("Todos os campos obrigatórios devem ser preenchidos corretamente.");
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
      url,
    };

    try {
      await api.post("/produtos", novoProduto);
      setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);
      setNomeProduto("");
      setModelo("");
      setMarca("");
      setPreco("");
      setDescricao("");
      setQuantidade("");
      setStatus_disponibilidade("");
      setCategoria("");
      setUrl("");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  const handleDelete = async (idProduto) => {
    try {
      await api.delete(`/produtos/${idProduto}`);
      fetchProdutos();
    } catch (error) {
      console.error("Erro ao excluir dados:", error);
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
                placeholder="Modelo"
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
              <select
                value={status_disponibilidade}
                onChange={(e) => setStatus_disponibilidade(e.target.value)}
              >
                <option value="Disponivel">Disponível</option>
                <option value="Indefinido">Indefinido</option>
                <option value="Indisponivel">Indisponível</option>
              </select>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Indefinido">Indefinido</option>
                <option value="Celular">Celular</option>
                <option value="Computador">Computador</option>
                <option value="Fones">Fones</option>
                <option value="Televisão">Televisão</option>
                <option value="Notebook">Notebook</option>
              </select>
              <input
                type="text"
                placeholder="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
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
            <th>Nome do Produto</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Quantidade</th>
            <th>url</th>
            <th>Categoria</th>
            <th>Status</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.idProduto}>
              <td>{produto.nomeProduto}</td>
              <td>{produto.marca}</td>
              <td>{produto.modelo}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.url}</td>
              <td>{produto.categoria}</td>
              <td>{produto.status_disponibilidade}</td>
              <td>{produto.preco}</td>
              <td className="icones-react">
                <RiDeleteBin6Line
                  onClick={() => handleDelete(produto.idProduto)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TabelaProduto;
