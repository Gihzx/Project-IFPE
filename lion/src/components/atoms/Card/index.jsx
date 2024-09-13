import { useNavigate } from "react-router-dom";

function Card({ idProduto, url, nome, preco }) {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    if (idProduto) {
      navigate(`/descricao/${idProduto}`); 
    } else {
      console.error("ID do produto não encontrado!");
    }
  };

  return (
    <div className="card-produtos">
      <div className="header-card">
        <img src={url.replace(/\w\.jpg/gi, 'T.jpg')} alt="img" className="img" />
      </div>
      <div className="body-card">
        <p>{nome}</p>
        <p>{preco}</p>
      </div>
      <div className="footer-card">
        <button className="btn-buy" onClick={handleBuyClick}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Card;
