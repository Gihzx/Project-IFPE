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

  const removerProduto = (id) => {
    const novosProdutos = produtosCarrinho.filter(
      (produto) => produto.id !== id
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

      // Atualiza o estado local após a resposta da API
      setProdutosCarrinho((produtos) =>
        produtos.map((produto) =>
          produto.id === idProduto
            ? { ...produto, quantidade: novaQuantidade }
            : produto
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
    }
  };

  const handleConfirmPurchase = async () => {
    setShowPopup(true);

    for (const produto of produtosCarrinho) {
      const novaQuantidade = produto.quantidade - 1;

      await handleUpdate(produto.id, novaQuantidade);
    }

    localStorage.removeItem("carrinho");
    setProdutosCarrinho([]);
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
        return total + precoProduto;
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
                <div key={produto.id}>
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
                      <p>{produto.descricao}</p>
                      <p>Cor: branco</p>
                      <button
                        className="remover"
                        onClick={() => removerProduto(produto.id)}
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
