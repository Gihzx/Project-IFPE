import './landingStyle.css'
import logo from '../../assets/logo-sm.svg'
import camera from '../../assets/Rectangle 45.svg'
import fone from '../../assets/Rectangle 50.svg'
import controle from '../../assets/Rectangle 51.svg'
import relogio from '../../assets/Rectangle 52.svg'
import imgCelular from '../../assets/Rectangle 53.svg'
import imgElipse from '../../assets/Ellipse 1.svg'
import  {Blog} from '../../components/molecules/carrossel/carrosel2'
function LandingPage() {
    return (
        <>
            <div className="navBarHome">
                <img src={logo} alt="logo" className='logo1' />
                <div className='itens1'>
                    <div>Home</div>
                    <div>Contatos</div>
                    <div>FAQ</div>
                </div>
                <div className='itens2'>
                  <div className='button1'><button>Login</button></div>
                    <div>Cadastro</div>
                </div>
            </div>
            {/* <div className='laranja'></div> */}
            <Blog/>
            <div className='traco'><h4>Navegador por categoria</h4></div>
            <div className="imgCategoria">
                <div><img src={camera} alt="camera"  className='img'/></div>
                <div><img src={fone} alt="fone" className='img'/></div>
                <div><img src={controle} alt="controle" className='img'/></div>
                <div><img src={relogio} alt="relogio" className='img'/></div>
            </div>
            <section className='secao2'>
                <img src={imgCelular} alt="" />
                <img src={imgElipse} alt="" />
            </section>
        </>
    )
}
export default LandingPage