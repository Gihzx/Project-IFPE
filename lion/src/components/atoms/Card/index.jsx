import { useNavigate } from "react-router-dom";
function Card(prop) {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/descricao"); // Navega para a rota "/descricao"
  };

  return (
    <div className="card-produtos">
      <div className="header-card">
        <img src={prop.url} alt="img" className="img" />
      </div>
      <div className="body-card">
        <p>{prop.nome} </p>
        <p>{prop.preco}</p>
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
