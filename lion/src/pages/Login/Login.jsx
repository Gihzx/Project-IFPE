import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "../../GlobalStylesForm.css";
import Logo from "../../assets/logo-sm.svg";
import api from "../../api";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    email: '',
    senha: ''
  })
  const messages = [];

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  /**
   * 
   * @param {usuario} usuario 
   */
  function validData(usuario) {
    if(usuario.email.trim() == '') {
      messages.push('email é obrigatório');
    }

    if(usuario.senha.trim() == '') {
      messages.push('senha é obrigatória');
    }

    return (messages.length <= 0) ? true : false;
  }

  /**
   * 
   * @param {usuario} credenciais 
   */
  function RealizaLogin(credenciais) {
      let isValid = validData(credenciais);

      if(!isValid) {
        messages.forEach((msg) => {
          Toast.fire({
            icon: "error",
            title: msg
          });
        }) 
        return;
      }

      api.post('/usuarios/login', credenciais)
        .then(response => {
          console.log(response)
          navigate("/produtoPages")
        })
        .catch(error => {
          Toast.fire({
            icon: "error",
            title: error.response.data
          });
        });
  }

  return (
    <div className="container-page">
      <div className="container-logo-form">
        <img src={Logo} alt="" />
        <h5>Lion Eletronics </h5>
      </div>
      <div className="container-form">
        <h3>Login</h3>
        <form>
          <div className="container-items-form">
            <label htmlFor="email">Email: </label>
            <input id="email" 
              type="email" 
              className="validate" 
              value={usuario.email || ''}
              onChange={(e) =>
                setUsuario((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </div>

          <div className="container-items-form">
            <label htmlFor="password">Senha: </label>
            <input id="password" 
              type="password" 
              className="validate" 
              value={usuario.senha || ''}
              onChange={(e) =>
                setUsuario((prevState) => ({
                  ...prevState,
                  senha: e.target.value,
                }))
              }
            />
          </div>
        </form>

        <button type="submit" className="btn-submit" onClick={() => RealizaLogin(usuario)}>
          Acessar
        </button>

        <span className="container-link-form">
          <a href="/registrar-conta">Registrar-se</a>
          <a href="/recuperar-senha">Esqueceu a senha</a>
        </span>
      </div>
    </div>
  );
}
export default Login;
