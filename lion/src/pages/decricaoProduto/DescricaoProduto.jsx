import "./descricao.css";
import NavBar from "../../components/molecules/navBar/NavBar";
function DescricaoProduto() {
  return (
    <>
      <NavBar />
      <section>
        <div className="ContainerProduto">
          <div>
            <img
              src="https://http2.mlstatic.com/D_916682-MLA47782359266_102021-W.jpg"
              alt="celuular"
            />
          </div>
          <div className="infos">
            <h3>IPhone</h3>
            <h4> 13(128 GB) Estelar </h4>
            <h4>Marca: Apple</h4>
            <h4>R$ 3.869</h4>
            <h6>Descrição:</h6>
            <p>
              iPhone 13, tem sua câmeras trazera dupla de 12 MP com modo
              retrato, controle de profundidade, iluminação de retrato, HDR
              inteligente e vídeo Dolby Vision HDR 4K de até 30 fps e a câmera
              frontal TrueDepth de 12 MP com modo Retrato, Controle de
              Profundidade, Iluminação Retrato e Smart HDR 3. Sua tela fica em
              modo cinema, diminui a profundidade de campo e muda o foco nos
              seus vídeos automaticamente.
            </p>
            <p className="button-descricao">Adicionar ao carrinho</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default DescricaoProduto;
