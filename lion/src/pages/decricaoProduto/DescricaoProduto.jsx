import "../decricaoProduto/descricao.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";
import NavBar from "../../components/molecules/navBar/NavBar";

function DescricaoProduto() {
  const { idProduto } = useParams();
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    if (idProduto) {
      fetchProduto(idProduto);
    }
  }, [idProduto]);

  // Função para buscar o produto selecionado
  const fetchProduto = async (idProduto) => {
    try {
      const response = await api.get(`/produtos/${idProduto}`);
      setProdutoSelecionado(response.data);
    } catch (error) {
      console.log(`Erro ao buscar dados do produto: ${error}`);
    }
  };

  // Função para adicionar o produto ao carrinho
  const adicionarAoCarrinho = () => {
    if (produtoSelecionado) {
      setCarrinho((prevCarrinho) => [...prevCarrinho, produtoSelecionado]);
      console.log("Produto adicionado ao carrinho:", produtoSelecionado);
    }
  };

  return (
    <>
      <NavBar />
      <section>
        <div className="ContainerProduto">
          {produtoSelecionado ? (
            <div className="produto-detalhes">
              <div className="imagem">
                <img
                  src={produtoSelecionado.url.replace(/\w\.jpg/gi, "W.jpg")}
                  alt={produtoSelecionado.nomeProduto}
                />
              </div>
              <div className="infos">
                <h6>COD: {produtoSelecionado.idProduto}</h6>
                <h3>{produtoSelecionado.nomeProduto}</h3>
                <h4>{produtoSelecionado.marca}</h4>
                <h4>R${produtoSelecionado.preco}</h4>
                <h6>Descrição:</h6>
                <p>{produtoSelecionado.descricao}</p>
                <p>{produtoSelecionado.status_disponibilidade}</p>
                <Link to="/carrinho">
                  {" "}
                  <button
                    className="button-descricao"
                    onClick={adicionarAoCarrinho}
                  >
                    Adicionar ao carrinho
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <p>Carregando informações do produto...</p>
          )}
        </div>
      </section>
    </>
  );
}

export default DescricaoProduto;
