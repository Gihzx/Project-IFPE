import "./descricao.css";
import NavBar from "../../components/molecules/navBar/NavBar";

import { useEffect, useState } from "react";
import api from "../../api";
function DescricaoProduto() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    fetchProdutos();
  }, []);
  const fetchProdutos = async () => {
    try {
      const response = await api.get("/produtos");
      console.log(response.data);
      setProdutos(response.data);
    } catch (error) {
      console.log(`erro ao buscar dados ${error}`);
    }
  };
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
            {produtos.length > 0 ? (
              produtos.map((produto, index) => (
                <div key={index}>
                  <p>{produto.idProduto}</p>
                  <h3>{produto.nomeProduto}</h3>
                  <h4>13(128 GB) Estelar</h4>
                  <h4>{produto.marca}</h4>
                  <h4>{produto.preco}</h4>
                  <h6>Descrição:</h6>
                  <p>{produto.descricao}</p>
                </div>
              ))
            ) : (
              <p>Nenhum produto encontrado.</p>
            )}
            <p className="button-descricao">Adicionar ao carrinho</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default DescricaoProduto;
