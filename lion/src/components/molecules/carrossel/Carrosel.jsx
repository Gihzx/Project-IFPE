import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

import "./style.css";
import { useRef } from "react";
function Carrosel() {
  const produtos = [
    {
      id: 1,
      nome: "Celular",
      descricao: "Descrição 1",
      preco: 10,
      imagem: "https://http2.mlstatic.com/D_958009-MLA71782868134_092023-T.jpg",
    },
    {
      id: 2,
      nome: "Relogio",
      descricao: "Descrição 2",
      preco: 11,
      imagem: "https://http2.mlstatic.com/D_704937-MLU77327941971_062024-T.jpg",
    },
    {
      id: 3,
      nome: "Computador",
      descricao: "Descrição 3",
      preco: 12,
      imagem: "https://http2.mlstatic.com/D_609485-MLU76796912071_062024-T.jpg",
    },
    {
      id: 4,
      nome: "Notebook",
      descricao: "Descrição 4",
      preco: 13,
      imagem: "https://http2.mlstatic.com/D_614885-MLA49588273946_042022-T.jpg",
    },
    {
      id: 5,
      nome: "Tablet",
      descricao: "Descrição 4",
      preco: 13,
      imagem: "https://http2.mlstatic.com/D_963756-MLU75422084542_042024-T.jpg",
    },
    {
      id: 6,
      nome: "Notebook",
      descricao: "Descrição 4",
      preco: 13,
      imagem: "https://http2.mlstatic.com/D_763352-MLU77595801805_072024-T.jpg",
    },
    {
      id: 7,
      nome: "retset",
      descricao: "Descrição 4",
      preco: 13,
      imagem: "https://http2.mlstatic.com/D_974026-MLU77446199300_072024-T.jpg",
    },
    {
      id: 8,
      nome: "retset",
      descricao: "Descrição 4",
      preco: 13,
      imagem: "https://http2.mlstatic.com/D_897691-MLB71229171865_082023-T.jpg",
    },
  ];
  const carousel = useRef(null);
  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handleleftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  return (
    <>
      <div className="container">
        <div className="carousel" ref={carousel}>
          {produtos.map((produto) => (
            <div className="item" key={produto.id}>
              <div className="image">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <div className="info">
                <h5>{produto.nome}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="botoes">
          <button onClick={handleleftClick}>
            <GoChevronLeft size={40} />
          </button>
          <button onClick={handleRightClick}>
            <GoChevronRight size={40} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carrosel;
