import { useEffect, useState } from "react";
import img from "../../../assets/logo-sm.svg";
import "../navBar/navBar.css";
import api from "../../../api";
import Menu from "../../atoms/Menu/menu";
import { IoSearch } from "react-icons/io5";
import { FiUser, FiShoppingCart, FiAlignJustify } from "react-icons/fi";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [produtos, setProdutos] = useState([]);

  function handlerOpenMenu() {
    setOpenMenu((prevState) => !prevState);
  }

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
      console.log(response.data); // Verifique os dados recebidos
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const filteredItems = produtos.filter(
    (item) =>
      item.nomeProduto &&
      item.nomeProduto.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="containerb">
        <div className="logo">
          <img src={img} alt="" />
          <h2>Lion Eletronics</h2>
        </div>
        <div className="menu">
          <input
            type="search"
            placeholder="O que você está buscando?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="icones">
            <button type="button" className="botaoIcone">
              <IoSearch color="#fff" size={28} />
            </button>
            <a href="/login">
              <FiUser color="#fff" size={28} />
            </a>
            <FiShoppingCart color="#fff" size={28} className="cartCarrinho" />
            <span className="status">1</span>
            <FiAlignJustify color="#fff" size={28} onClick={handlerOpenMenu} />
            {openMenu && <Menu />}
          </div>
        </div>
      </div>
      <div className="laranja"></div>

      {/* Renderizar produtos filtrados */}
      <div>
        {search
          ? filteredItems.map((item) => (
              <div key={item.idProduto}>
                <h3>{item.nomeProduto}</h3>
                <p>{item.marca}</p>
                <p>{item.preco}</p>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default NavBar;
