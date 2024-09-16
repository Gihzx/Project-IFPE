import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/molecules/navBar/NavBar";
import "./carrinho.css";

function Carrinho() {
  const [editing, setEditing] = useState(null);
  const [produtosCarrinho, setProdutosCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  const [showPopup, setShowPopup] = useState(false);
  const [formaPagamento, setFormaPagamento] = useState("");
  const navigate = useNavigate();

  const removerProduto = (id) => {
    console.log("Removendo produto com ID:", id);
    const novosProdutos = produtosCarrinho.filter(
      (produto) => produto.id !== id
    );
    console.log("Produtos após remoção:", novosProdutos);
    setProdutosCarrinho(novosProdutos);
    localStorage.setItem("carrinho", JSON.stringify(novosProdutos));
    console.log("LocalStorage atualizado:", localStorage.getItem("carrinho"));
  };

  useEffect(() => {
    handleUpdate();
  }, []);

  const handleConfirmPurchase = () => {
    setShowPopup(true);
    localStorage.removeItem("carrinho");
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate("/");
  };
  const handleUpdate = async () => {
    await api.put(`/:idProduto${editing.idProduto}`);
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
          <span className="produto">
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
                      <p>Cor: branco</p>{" "}
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
          </span>
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
