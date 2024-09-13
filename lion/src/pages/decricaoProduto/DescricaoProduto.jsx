import "./descricao.css";
import NavBar from "../../components/molecules/navBar/NavBar";

import { useEffect, useState } from "react";
import api from "../../api";

function DescricaoProduto() {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null); // Estado para o produto selecionado

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await api.get("/produtos");
      console.log(response.data);
      setProdutos(response.data);
    } catch (error) {
      console.log(`erro ao buscar dados ${error}`);
    }
  };

  const selecionarProduto = (produto) => {
    setProdutoSelecionado(produto); // Define o produto clicado como o selecionado
  };

  return (
    <>
      <NavBar />
      <section>
        <div className="ContainerProduto">
          <div>
            {/* Verificação para garantir que produtoSelecionado não é null antes de acessar a url */}
            {produtoSelecionado ? (
              <img src={produtoSelecionado.url} alt={produtoSelecionado.nomeProduto} />
            ) : (
              <img
                src="https://http2.mlstatic.com/D_916682-MLA47782359266_102021-W.jpg"
                alt="imagem padrão"
              />
            )}
          </div>
          <div className="infos">
            {produtoSelecionado ? (
              <div>
                <h6>COD: {produtoSelecionado.idProduto}</h6>
                <h3>{produtoSelecionado.nomeProduto}</h3>
                <h4>{produtoSelecionado.marca}</h4>
                <h4>{produtoSelecionado.preco}</h4>
                <h6>Descrição:</h6>
                <p>{produtoSelecionado.descricao}</p>
                <p>{produtoSelecionado.status_disponibilidade}</p>
              </div>
            ) : (
              produtos.map((produto, index) => (
                <div key={index} onClick={() => selecionarProduto(produto)} style={{ cursor: 'pointer' }}>
                  <h3>{produto.nomeProduto}</h3>
                  <h4>{produto.marca}</h4>
                  <p>Clique para ver detalhes</p>
                </div>
              ))
            )}
            <p className="button-descricao">Adicionar ao carrinho</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default DescricaoProduto;
