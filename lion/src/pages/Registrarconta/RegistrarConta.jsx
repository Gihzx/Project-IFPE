import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./RegistrarConta.css";
import "../../GlobalStylesForm.css";
import Logo from "../../assets/logo-sm.svg";
import api from "../../api"
import Swal from "sweetalert2";

function RegistrarConta() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    email: "",
    endereco: "",
    bairro: "",
    cidade: "",
    numero: "",
    senha: "",
    repetirSenha: "",
  });

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

  const nextToStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const backToStep = () => {
    setStep((prevState) => prevState - 1);
  };

  /**
   *
   * @param {usuario} data
   */
  function ValidData(data) {
    if (data.nome.trim() == "") {
      messages.push("O nome é obrigatório");
    }

    if (data.cpf.trim() == "") {
      messages.push("O CPF é obrigatório");
    }

    if (data.cpf.length < 11 && data.cpf.length < 14) {
      messages.push("CPF Invalido");
    }

    if (data.email.trim() == "") {
      messages.push("O email é obrigatório");
    }

    if (data.senha.trim() == "" && data.repetirSenha == "") {
      messages.push("Os campos de senha são obrigatório");
    }

    if (data.senha.trim() != data.repetirSenha.trim()) {
      messages.push("Os campos de senha são diferentes");
    }

    return messages.length <= 0 ? true : false;
  }

  /**
   *
   * @param {usuario} usuario
   */
  function RegistraUsuario(usuario) {
    console.log(usuario)
    let isValido = ValidData(usuario);

    if (!isValido) {
      messages.forEach((msg) => {
        Toast.fire({
          icon: "error",
          title: msg
        });
      })
      return;
    }
    
    api.post(`/usuarios`, {
      nomeCliente: usuario.nome,
      cpf: usuario.cpf,
      emailCliente: usuario.email,
      logradouro: usuario.endereco,
      numero: usuario.numero,
      cidade: usuario.cidade,
      senha: usuario.senha,
      tipo: 0,
    })
    .then(response => {
      console.log(response)
      navigate("/login")
    })
    .catch(error => {
      Toast.fire({
        icon: "error",
        title: error.response.data
      });
    })
  }

  return (
    <div className="container-page">
      <div className="container-logo-form">
        <img src={Logo} alt="logo" />
        <h5>Lion Eletronics </h5>
      </div>

      <div className="container-form">
        <h6>Registrar Conta</h6>

        <form>
          {step <= 1 ? (
            <>
              <div className="container-items-form">
                <label htmlFor="Nome">Nome</label>
                <input
                  id="Nome"
                  type="text"
                  className="validate"
                  value={usuario.nome || ""}
                  onChange={(e) =>
                    setUsuario((prevState) => ({
                      ...prevState,
                      nome: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  type="text"
                  className="validate"
                  value={usuario.cpf || ""}
                  onChange={(e) =>
                    setUsuario((prevState) => ({
                      ...prevState,
                      cpf: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="validate"
                  value={usuario.email || ""}
                  onChange={(e) =>
                    setUsuario((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
            </>
          ) : step == 2 ? (
            <>
              <div className="container-items-form">
                <label htmlFor="endereco">Endereço</label>
                <input
                  id="endereco"
                  type="text"
                  className="validate"
                  value={usuario.endereco || ""}
                  onChange={(e) =>
                    setUsuario((prevState) => ({
                      ...prevState,
                      endereco: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="bairro">Bairro</label>
                <input
                  id="bairro"
                  type="text"
                  className="validate"
                  value={usuario.bairro || ""}
                  onChange={(e) =>
                    setUsuario((prevState) => ({
                      ...prevState,
                      bairro: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="cidade">Cidade</label>
                <input
                  id="cidade"
                  type="text"
                  className="validate"
                  value={usuario.cidade || ""}
                  onChange={(e) =>
                    setUsuario((prevState) => ({
                      ...prevState,
                      cidade: e.target.value,
                    }))
                  }
                />
              </div>
            </>
          ) : (
            <>
              <div className="container-items-form">
                <label htmlFor="numero">Número</label>
                <input
                  id="numero"
                  type="text"
                  className="validate"
                  value={usuario.numero || ""}
                  onChange={(e) =>
                    setUsuario((prevState) => ({
                      ...prevState,
                      numero: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  className="validate"
                  value={usuario.senha || ""}
                  onChange={(e) =>
                    setUsuario((prevState) => ({
                      ...prevState,
                      senha: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="confirm-password">Senha Novamente</label>
                <input
                  id="confirm-password"
                  type="password"
                  className="validate"
                  value={usuario.repetirSenha || ""}
                  onChange={(e) =>
                    setUsuario((prevState) => ({
                      ...prevState,
                      repetirSenha: e.target.value,
                    }))
                  }
                />
              </div>
            </>
          )}
        </form>

        {step <= 1 ? (
          <button type="button" className="btn-submit" onClick={nextToStep}>
            Próximo
          </button>
        ) : step <= 2 ? (
          <>
            <div className="container-buttons-form">
              <button type="button" className="btn-submit" onClick={backToStep}>
                Anterior
              </button>
              <button type="button" className="btn-submit" onClick={nextToStep}>
                Próximo
              </button>
            </div>
          </>
        ) : (
          <div className="container-buttons-form">
            <button type="button" className="btn-submit" onClick={backToStep}>
              Anterior
            </button>
            <button
              type="submit"
              className="btn-submit"
              onClick={() => RegistraUsuario(usuario)}
            >
              Registrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default RegistrarConta;
