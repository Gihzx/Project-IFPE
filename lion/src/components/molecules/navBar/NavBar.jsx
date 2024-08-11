import { useState } from "react";
import img from "../../../assets/LeonsEletronico 1.svg";
import "../navBar/navBar.css";
import { FiAlignJustify } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
function NavBar() {
  const [input, setInput] = useState("Hinted search text");
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={img} alt="" />
          <h2>Lion Eletronics</h2>
        </div>
        <div className="menu">
          <input
            type="text"
            // temos um input que pega o valor e exibi em outro local que vc escolher
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
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
