import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/molecules/navBar/NavBar";
import "./carrinho.css";
import api from "../../api";

function Carrinho() {
  const [produtosCarrinho, setProdutosCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  const [showPopup, setShowPopup] = useState(false);
  const [formaPagamento, setFormaPagamento] = useState("");
  const navigate = useNavigate();

  const removerProduto = (idProduto) => {
    const novosProdutos = produtosCarrinho.filter(
      (produto) => produto.idProduto !== idProduto
    );
    setProdutosCarrinho(novosProdutos);
    localStorage.setItem("carrinho", JSON.stringify(novosProdutos));
  };

  const handleUpdate = async (idProduto, novaQuantidade) => {
    try {
      if (!idProduto) {
        throw new Error("ID do produto não definido");
      }

      const response = await api.put(`/produtos/${idProduto}`, {
        quantidade: novaQuantidade,
      });

      setProdutosCarrinho((produtos) =>
        produtos.map((produto) =>
          produto.idProduto === idProduto
            ? { ...produto, quantidade: novaQuantidade }
            : produto
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
    }
  };

  const handleQuantidadeChange = (idProduto, novaQuantidade) => {
    const novosProdutos = produtosCarrinho.map((produto) => {
      if (produto.idProduto === idProduto) {
        return { ...produto, quantidade: novaQuantidade };
      }
      return produto;
    });
    setProdutosCarrinho(novosProdutos);
    localStorage.setItem("carrinho", JSON.stringify(novosProdutos));
  };

  const handleConfirmPurchase = async () => {
  setShowPopup(true);

  try {
    // Supondo que o usuário selecionou apenas um produto no carrinho
    const produtoSelecionado = produtosCarrinho[0]; // O produto que está no carrinho
    const response = await api.post('/pedidos/confirmar', {
      dataEmissao: new Date(),
      statusPedido: 'confirmado',
      idUsuario: usuario.idUsuario, 
      idProduto: produtoSelecionado.idProduto,
      quantidade: produtoSelecionado.quantidade
    });

    if (response.status === 200) {
      localStorage.removeItem("carrinho");
      setProdutosCarrinho([]);
    }
  } catch (error) {
    console.error("Erro ao enviar pedido:", error);
  }
};

  const closePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  const calcularTotal = () => {
    return produtosCarrinho
      .reduce((total, produto) => {
        const precoProduto =
          typeof produto.preco === "number"
            ? produto.preco
            : parseFloat(produto.preco) || 0;
        return total + precoProduto * produto.quantidade;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <NavBar />
      <div className="Container-carrinho">
        <div className="h1Cards">
          <h5>Seu carrinho</h5>
          <div className="produto">
            {produtosCarrinho.length > 0 ? (
              produtosCarrinho.map((produto) => (
                <div key={produto.idProduto}>
                  <div className="container-img">
                    <img
                      src={produto.url}
                      alt="Produto no carrinho"
                      className="imgCarrinho"
                    />
                    <div className="inforCards">
                      <span className="valor">
                        <h5>{produto.nomeProduto}</h5>
                        <p className="preco">
                          R$:{" "}
                          {typeof produto.preco === "number"
                            ? produto.preco.toFixed(2)
                            : parseFloat(produto.preco).toFixed(2)}
                        </p>
                      </span>
                      <p>
                        Quantidade:{" "}
                        <input
                          type="number"
                          value={produto.quantidade}
                          min="1"
                          onChange={(e) =>
                            handleQuantidadeChange(
                              produto.idProduto,
                              parseInt(e.target.value, 10)
                            )
                          }
                        />
                      </p>
                      <button
                        className="remover"
                        onClick={() => removerProduto(produto.idProduto)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Seu carrinho está vazio!</p>
            )}
          </div>
        </div>

        {produtosCarrinho.length > 0 && (
          <div className="Pagamento">
            <h5>Informações de pagamento</h5>
            <div>
              <p>Forma de pagamento</p>
              <label>
                <input
                  type="radio"
                  name="pagamento"
                  value="cartaoDeb"
                  onChange={(e) => setFormaPagamento(e.target.value)}
                />
                Débito ou crédito
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="pagamento"
                  value="cartaoCre"
                  onChange={(e) => setFormaPagamento(e.target.value)}
                />
                Cartão Crédito
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="pagamento"
                  value="pix"
                  onChange={(e) => setFormaPagamento(e.target.value)}
                />
                Pix
              </label>
            </div>

            <h6>Informações do cartão</h6>
            <label>Nome no cartão</label>
            <input type="text" placeholder="Gabriella Rocha Fernandes" />
            <label>Número do cartão</label>
            <input type="text" placeholder="5061 2345 6789 1235" />
            <div>
              <input type="date" className="input" />
              <input type="text" placeholder="CVV" />
            </div>
            <div>
              <h6>Valor total</h6>
              <p>R$ {calcularTotal()}</p>
            </div>
            <button className="confirmar-btn" onClick={handleConfirmPurchase}>
              Confirmar Compra
            </button>

          </div>
        )}
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Compra realizada com sucesso!</h2>
            <button onClick={closePopup}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Carrinho;
