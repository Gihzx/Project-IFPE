import img from "../../../assets/LeonsEletronico 1.svg";
import "../navBar/navBar.css";
import { FiAlignJustify } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
function NavBar() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={img} alt="" />
          <h2>Lion Eletronics</h2>
        </div>
        <div className="menu">
          <input type="text" placeholder="Hinted search text" />
          <div className="icones">
            {/* menino */}
            <FiUser color="#fff" size={28} />
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
