import { useState, useEffect } from "react";
import DescricaoProduto from "../DescricaoProduto";
import api from "../../../api"; // Certifique-se de importar a instância correta do API

function PageDescricao() {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      const response = await api.get("/produtos");
      // Assumindo que você está pegando um único produto. Se for uma lista, você precisará ajustar
      setProduto(response.data[0]); // Ajuste conforme a estrutura dos dados
    } catch (error) {
      console.error(`Erro ao buscar produtos: ${error}`);
    }
  };

  return (
    <>
      {produto ? (
        <DescricaoProduto props={produto} data={produto} />
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}

export default PageDescricao;
