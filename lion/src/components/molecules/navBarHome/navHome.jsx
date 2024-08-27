import img from "../../../assets/logo-sm.svg";
import "./navHomeStyle.css";
function NavHome() {
  return (
    <>
      <div className="navBarHome">
        <div className="nav">
          <img src={img} alt="logo" className="logo" />
          <div className="names">
            <p>Home</p>
            <p>Contatos</p>
            <p>FAQ</p>
          </div>
          <div className="button">
            <button className="btn-login">Login</button>
            <button className="btn-cadastro">Cadastro</button>
          </div>
        </div>
        <div className="row-orage-one"></div>
      </div>
    </>
  );
}
export default NavHome;
