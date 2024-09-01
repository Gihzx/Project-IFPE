import img from "../../../assets/logo-sm.svg";
import "../navBar/navBar.css";
import { FiUser, FiShoppingCart, FiAlignJustify } from "react-icons/fi";
function NavBar() {
  return (
    <>
      <div className="containerb">
        <div className="logo">
          <img src={img} alt="" />
          <h2>Lion Eletronics</h2>
        </div>
        <div className="menu">
          <input type="text" placeholder="O que você está buscando?" />
          <div className="icones">
            {/* usuario */}
            <a href="/login">
              <FiUser color="#fff" size={28} />
            </a>
            {/* iconeCarrinho */}
            <FiShoppingCart color="#fff" size={28} />
            {/* hamburguer */}
            <FiAlignJustify color="#fff" size={28} />
          </div>
        </div>
      </div>
      <div className="laranja"></div>
    </>
  );
}
export default NavBar;
