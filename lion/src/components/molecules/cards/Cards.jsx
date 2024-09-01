import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imgRelogio from "../../../assets/Captura_de_tela_2024-08-28_055659-removebg-preview.png";
import "./cardsStyles.css";

function Cards() {
  const produtos = [
    { id: 1, nome: "Produto 1", descricao: "Descrição 1", preco: 10 },
    { id: 2, nome: "Produto 2", descricao: "Descrição 2", preco: 11 },
    { id: 3, nome: "Produto 3", descricao: "Descrição 3", preco: 12 },
    { id: 4, nome: "Produto 4", descricao: "Descrição 4", preco: 13 },
    { id: 5, nome: "Produto 5", descricao: "Descrição 5", preco: 14 },
  ];

  return (
    <>
      {produtos.map((produto) => (
        <Card key={produto.id} style={{ width: "18rem", marginBottom: "1rem" }}>
          <Card.Img variant="top" src={imgRelogio} className="imgVendas" />
          <Card.Body>
            <Card.Title>{produto.nome}</Card.Title>
            <Card.Text>
              {produto.descricao} - R$ {produto.preco.toFixed(2)}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Cards;
