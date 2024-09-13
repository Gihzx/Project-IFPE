import { useState } from "react";
import img from "../../../assets/logo-sm.svg";
import "../navBar/navBar.css";
import Menu from "../../atoms/Menu/menu";
import { FiUser, FiShoppingCart, FiAlignJustify } from "react-icons/fi";

function NavBar({ setSearchTerm }) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu((prevState) => !prevState);
  }

  // Função para lidar com a entrada no campo de busca
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // Atualiza o termo de busca no estado do componente pai
  };

  return (
    <>
      <div className="containerb">
        <div className="logo">
          <img src={img} alt="" />
          <h2>Lion Eletronics</h2>
        </div>
        <div className="menu">
          <input
            type="text"
            placeholder="O que você está buscando?"
            onChange={handleInputChange}
          />
          <div className="icones">
            <a href="/login">
              <FiUser color="#fff" size={28} />
            </a>
            <FiShoppingCart color="#fff" size={28} className="cartCarrinho" />
            <span className="status">1</span>
            <FiAlignJustify color="#fff" size={28} onClick={handleOpenMenu} />
            {openMenu && <Menu />}
          </div>
        </div>
      </div>
      <div className="laranja"></div>
    </>
  );
}

export default NavBar;
