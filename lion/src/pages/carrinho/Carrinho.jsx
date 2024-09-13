import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/molecules/navBar/NavBar";
import img from "../../assets/Captura_de_tela_2024-08-28_055659-removebg-preview.png";
import "./carrinho.css";

function Carrinho() {
  const [produtosCarrinho, setProdutosCarrinho] = useState([
    { id: 1, nome: "Produto 1", descricao: "Descrição 1", preco: 10 },
    { id: 2, nome: "Produto 2", descricao: "Descrição 2", preco: 11 },
    { id: 3, nome: "Produto 3", descricao: "Descrição 3", preco: 12 },
  ]);

  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const removerProduto = (id) => {
    const novosProdutos = produtosCarrinho.filter(
      (produto) => produto.id !== id
    );
    setProdutosCarrinho(novosProdutos);
  };

  const handleConfirmPurchase = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="Conatiner-carrinho">
        <div className="h1Cards">
          <h5>Seu carrinho</h5>
          <span className="produto">
            {produtosCarrinho.map((produto) => (
              <div key={produto.id}>
                <div className="container-img">
                  <img
                    src={img}
                    alt="Produto no carrinho"
                    className="imgCarrionho"
                  />
                  <div className="inforCards">
                    <span className="valor">
                      <h5>{produto.nome}</h5>
                      <p className="preco">R$: {produto.preco.toFixed(2)}</p>
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
            ))}
          </span>
        </div>

        <div className="Pagamento">
          <h5>Informações de pagamento</h5>
          <div>
            <p>Forma de pagamento</p>
            <label>
              <input type="radio" name="pagamento" value="cartaoDeb" />
              Débito ou crédito
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="pagamento" value="cartaoCre" />
              Cartão Crédito
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="pagamento" value="pix" />
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
            <input type="text" />
          </div>
          <div>
            <h6>Valor total</h6>
            <p>105,99</p>
          </div>
          <button className="confirmar-btn" onClick={handleConfirmPurchase}>
            Confirmar Compra
          </button>
        </div>
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
