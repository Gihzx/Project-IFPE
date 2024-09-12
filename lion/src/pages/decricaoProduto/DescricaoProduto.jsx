import "./descricao.css";
import NavBar from "../../components/molecules/navBar/NavBar";

function DescricaoProduto({ props }) {
  const { url, idProduto, nomeProduto, marca, preco, descricao } = props || {};

  return (
    <>
      <NavBar />
      <section>
        <div className="ContainerProduto">
          <div>
            {url ? (
              <img src={url} alt="imagem do produto" />
            ) : (
              <p>Imagem indisponível</p>
            )}
          </div>
          <div className="infos">
            {idProduto ? (
              <>
                <p>{idProduto}</p>
                <h3>{nomeProduto}</h3>
                <h4>{marca}</h4>
                <h4>{preco}</h4>
                <h6>Descrição:</h6>
                <p>{descricao}</p>
              </>
            ) : (
              <p>Nenhum produto encontrado.</p>
            )}
          </div>
          <p className="button-descricao">Adicionar ao carrinho</p>
        </div>
      </section>
    </>
  );
}

export default DescricaoProduto;
