import { useNavigate } from "react-router-dom";
function Card(prop) {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/descricao"); // Navega para a rota "/descricao"
  };
  return (
    <div className="card-produtos">
      <div className="header-card">IMAGEN</div>
      <div className="body-card">
        <span>{prop.nome}</span>
        <span>{prop.preco}</span>
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
