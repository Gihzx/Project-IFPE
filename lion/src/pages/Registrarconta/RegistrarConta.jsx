import { useState } from "react";
import "./RegistrarConta.css";
import "../../GlobalStylesForm.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-sm.svg";

function RegistrarConta() {
  const [step, setStep] = useState(1);
  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    email: "",
    endereco: "",
    cidade: "",
    numero: "",
    senha: "",
    repetirSenha: "",
  });

  const messages = [];

  const nextToStep = () => {
    setStep((prevState) => prevState + 1);
    console.log(step);
  };

  const backToStep = () => {
    setStep((prevState) => prevState - 1);
    console.log(step);
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

    if (data.cpf.length != 11) {
      messages.push("CPF Invalido");
    }

    if (data.email.trim()) {
      messages.push("O email é obrigatório");
    }

    if (data.senha.trim() == "" || data.repetirSenha == "") {
      messages.push("Os campos de senha são obrigatório");
    }

    if (data.senha.trim() != data.repetirSenha.trim()) {
      messages.push("Os campos de senha são diferentes");
    }

    return (messages.length <= 0) ? true : false
 }

 /**
  * 
  * @param {usuario} usuario 
  */
  function RegistraUsuario(usuario){
    let isValido = ValidData(usuario)

    if(!isValido) {
      console.log(`${messages}`)
      return;
    }

    console.log(`Usuário salvo com sucesso! ${usuario}`)
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
                  value={usuario.nome}
                  onChange={(e) => setUsuario((prevState) => ({ ...prevState, nome: e.target.value }))}
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="cpf">CPF</label>
                <input id="cpf" type="text" className="validate" 
                value={usuario.cpf}
                onChange={(e) => setUsuario((prevState) => ({ ...prevState, cpf: e.target.value }))}
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="validate" 
                value={usuario.email}
                onChange={(e) => setUsuario((prevState) => ({ ...prevState, email: e.target.value }))}
                />
              </div>
            </>
          ) : step == 2 ? (
            <>
              <div className="container-items-form">
                <label htmlFor="endereco">Endereço</label>
                <input id="endereco" type="text" className="validate" 
                value={usuario.endereco}
                onChange={(e) => setUsuario((prevState) => ({ ...prevState, endereco: e.target.value }))}
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" type="text" className="validate" 
                value={usuario.cidade}
                onChange={(e) => setUsuario((prevState) => ({ ...prevState, cidade: e.target.value }))}
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="numero">Número</label>
                <input id="numero" type="text" className="validate" 
                value={usuario.numero}
                onChange={(e) => setUsuario((prevState) => ({ ...prevState, numero: e.target.value }))}
                />
              </div>
            </>
          ) : (
            <>
              <div className="container-items-form">
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" className="validate" 
                value={usuario.password}
                onChange={(e) => setUsuario((prevState) => ({ ...prevState, password: e.target.value }))}
                />
              </div>

              <div className="container-items-form">
                <label htmlFor="confirm-password">Senha Novamente</label>
                <input
                  id="confirm-password"
                  type="password"
                  className="validate"
                  value={usuario.repetirSenha}
                  onChange={(e) => setUsuario((prevState) => ({ ...prevState, repetirSenha: e.target.value }))}
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
            <Link to="/produtoPages">
              <button type="submit" className="btn-submit" onClick={RegistraUsuario(usuario)}>
                Registrar
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default RegistrarConta;
