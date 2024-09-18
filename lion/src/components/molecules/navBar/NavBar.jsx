
import { useState, useEffect } from "react";
import img from "../../../assets/logo-sm.svg";
import { Link, useNavigate } from "react-router-dom";
import "../navBar/navBar.css";
import { CiLogin } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Swal from "sweetalert2"; 

function NavBar({ setSearchTerm }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));  
    if (user && user.isLoggedIn) {
      setIsLoggedIn(true);  
      console.log("Usuário está logado:", user.email); 
    }
  }, []);

  // Função para logout
  const handleLogout = () => {
    localStorage.removeItem("user");  // Remove as informações do usuário
    setIsLoggedIn(false);  // Atualiza o estado para indicar que o usuário está deslogado
    Swal.fire({
      icon: 'success',
      title: 'Logout realizado com sucesso',
      showConfirmButton: false,
      timer: 2000
    });
    navigate("/login");  // Redireciona para a página de login
  };

  function handleOpenMenu() {
    setOpenMenu((prevState) => !prevState);
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Função para verificar se o usuário está logado antes de ir ao carrinho
  const handleCarrinhoClick = () => {
    if (!isLoggedIn) {
      // Se o usuário não estiver logado, exibe o pop-up com a mensagem de "Necessário realizar login"
      Swal.fire({
        icon: 'warning',
        title: 'Necessário realizar login',
        text: 'Por favor, faça login para acessar o carrinho.',
        confirmButtonText: 'Fazer login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");  // Redireciona para a página de login se o usuário clicar em "Fazer login"
        }
      });
    } else {
      // Se o usuário estiver logado, redireciona normalmente para o carrinho
      navigate("/carrinho");
    }
  };

  return (
    <>
      <div className="containerb">
        <div className="logo">
          <Link to="/">
            <img src={img} alt="" />
          </Link>
          <h2>Lion Eletronics</h2>
        </div>
        <div className="menu">
          <input
            type="text"
            placeholder="Pesquise"
            onChange={handleInputChange}
          />
        

          <div className="icones">
            <FiShoppingCart
              color="#fff"
              size={28}
              className="cartCarrinho"
              onClick={handleCarrinhoClick}  
            />
            <span></span>
            {!isLoggedIn && (
              <Link to="/login">
                <CiLogin color="#fff" size={28} />
              </Link>
            )}
          </div>
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
              <div className="button">
                <Link to="/registrar-conta">
                  <button className="cadastrar">Cadastrar</button>
                </Link>
              </div>
            </>
          ) : (
            <button className="logout" onClick={handleLogout}>
              <CiLogin color="#fff" size={28} />
            </button>
          )}
        </div>
      </div>
      <div className="laranja"></div>
    </>
  );
}

export default NavBar;
