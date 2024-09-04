import imgCategory from "../../../assets/Rectangle 226.png";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

import "./style.css";
import { useRef } from "react";
function Carrosel() {
  const produtos = [
    { id: 1, nome: "Produto 1", descricao: "Descrição 1", preco: 10 },
    { id: 2, nome: "Produto 2", descricao: "Descrição 2", preco: 11 },
    { id: 3, nome: "Produto 3", descricao: "Descrição 3", preco: 12 },
    { id: 4, nome: "Produto 4", descricao: "Descrição 4", preco: 13 },
    { id: 5, nome: "Produto 5", descricao: "Descrição 5", preco: 14 },
    { id: 6, nome: "Produto 5", descricao: "Descrição 5", preco: 14 },
    { id: 7, nome: "Produto 5", descricao: "Descrição 5", preco: 14 },
    { id: 8, nome: "Produto 5", descricao: "Descrição 5", preco: 14 },
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
                <img src={imgCategory} alt="imgCategory" />
              </div>
              <div className="info">
                <span>Categoria</span>
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
