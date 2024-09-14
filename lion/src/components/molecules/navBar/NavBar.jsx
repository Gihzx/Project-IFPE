import { useState } from "react";
import img from "../../../assets/logo-sm.svg";
import { Link } from "react-router-dom";
import "../navBar/navBar.css";
import Menu from "../../atoms/Menu/menu";
import { FiUser, FiShoppingCart, FiAlignJustify } from "react-icons/fi";

function NavBar({ setSearchTerm }) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu((prevState) => !prevState);
  }
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
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
            <Link to="/carrinho">
              <FiShoppingCart color="#fff" size={28} className="cartCarrinho" />
            </Link>
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
