function Card(prop) {
  return (
    <div className="card-produtos">
      <div className="header-card">IMAGEN</div>
      <div className="body-card">
        <span>{prop.nome}</span>
        <span>{prop.preco}</span>
      </div>
      <div className="footer-card">
        <button className="btn-buy">Comprar</button>
      </div>
    </div>
  );
}

export default Card;
