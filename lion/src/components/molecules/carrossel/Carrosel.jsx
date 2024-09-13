import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

import "./style.css";
import { useRef } from "react";
function Carrosel({setCategory}) {
  const produtos = [
    {
      id: 1,
      nome: "Celulares",
      descricao: "Descrição 1",
      preco: 10,
      imagem: "https://http2.mlstatic.com/D_958009-MLA71782868134_092023-T.jpg",
      categoria: "celulares"
    },
    {
      id: 2,
      nome: "Relógios",
      descricao: "Descrição 2",
      preco: 11,
      imagem: "https://http2.mlstatic.com/D_704937-MLU77327941971_062024-T.jpg",
      categoria: "relogio"
    },
    {
      id: 3,
      nome: "Computadores",
      descricao: "Descrição 3",
      preco: 12,
      imagem: "https://http2.mlstatic.com/D_609485-MLU76796912071_062024-T.jpg",
      categoria: "computadores"
    },
    {
      id: 4,
      nome: "Notebook",
      descricao: "Descrição 4",
      preco: 13,
      imagem: "https://http2.mlstatic.com/D_614885-MLA49588273946_042022-T.jpg",
      categoria: "notebook"
    },
    {
      id: 5,
      nome: "Tablet",
      descricao: "Descrição 5",
      preco: 13,
      imagem: "https://http2.mlstatic.com/D_963756-MLU75422084542_042024-T.jpg",
    },
    {
      id: 6,
      nome: "TVs",
      descricao: "Descrição 6",
      preco: 13,
      imagem: "https://http2.mlstatic.com/D_763352-MLU77595801805_072024-T.jpg",
      categoria: "tvs"
    },
    {
      id: 7,
      nome: "Headset",
      descricao: "Descrição 7",
      preco: 13,
      imagem: "https://http2.mlstatic.com/D_974026-MLU77446199300_072024-T.jpg",
      categoria: "fone"
    },
    {
      id: 8,
      nome: "Games",
      descricao: "Descrição 8",
      preco: 13,
      imagem: "http://http2.mlstatic.com/D_757458-MLA53486418774_012023-T.jpg",
      categoria: "games"
    }

  ];
  const carrosel = useRef(null);
  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carrosel.current.offsetWidth);
    carrosel.current.scrollLeft += carrosel.current.offsetWidth;
  };
  const handleleftClick = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
  };

  return (
    <>
      <div className="container">
        <div className="carrosel" ref={carrosel}>
          {produtos.map((produto) => (
            <div className="item" key={produto.id}>
              <div className="image" onClick={() => setCategory(produto.categoria)}>
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