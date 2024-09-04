import NavBar from "../../components/molecules/navBar/NavBar";
import img from "../../assets/Captura_de_tela_2024-08-28_055659-removebg-preview.png";
import "./carrinho.css";
function Carrinho() {
  const ProdutosCarrinho = [
    { id: 1, nome: "Produto 1", descricao: "Descrição 1", preco: 10 },
    { id: 2, nome: "Produto 2", descricao: "Descrição 2", preco: 11 },
    { id: 3, nome: "Produto 3", descricao: "Descrição 3", preco: 12 },
  ];
  return (
    <>
      <NavBar />
      <div className="Conatiner-carrinho">
        <div className="h1Cards">
          <h5>Seu carrionho</h5>
          <span className="produto">
            {ProdutosCarrinho.map((produto) => (
              <div key={produto.id}>
                <div className="container-img">
                  <img
                    src={img}
                    alt="relogio Do Carrionho"
                    className="imgCarrionho"
                  />
                  <div className="inforCards">
                    <span className="valor">
                      <h5>Relogio casual lenovo</h5>
                      <p className="preco">R$:50,60</p>
                    </span>
                    <p>Cor: branco</p>
                  </div>
                </div>
              </div>
            ))}
          </span>
        </div>
        <div className="Pagamento">
          <h5>Informações de pagamento</h5>
          <div>
            <p>Foma de pagamento</p>
            <label htmlFor="">
              <input type="radio" value="" />
              Debito ou credito
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input type="radio" value="" />
              Cartão
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input type="radio" value="" />
              Pix
            </label>
          </div>
          <h6>Infomação do catão</h6>
          <label>Nome verso do catão</label>
          <input type="text" placeholder="Gabriella Rocha Fernandes" />
          <label>Numero do cartão</label>
          <input type="text" placeholder="5061 2345 6789 1235" />
          <div>
            <input type="date" className="input" />
            <input type="text" />
          </div>
          <div>
            <h6>Valor total</h6>
            <p>105,99</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Carrinho;
