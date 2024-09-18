// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../decricaoProduto/descricao.css";
// import api from "../../api";
// import NavBar from "../../components/molecules/navBar/NavBar";

// function DescricaoProduto() {
//   const { idProduto } = useParams();
//   const [produtoSelecionado, setProdutoSelecionado] = useState(null);
//   const [carrinho, setCarrinho] = useState(() => {
//     const carrinhoSalvo = localStorage.getItem("carrinho");
//     return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
//   });

//   useEffect(() => {
//     if (idProduto) {
//       fetchProduto(idProduto);
//     }
//   }, [idProduto]);

//   const fetchProduto = async (idProduto) => {
//     try {
//       const response = await api.get(`/produtos/${idProduto}`);
//       setProdutoSelecionado(response.data);
//     } catch (error) {
//       console.log(`Erro ao buscar dados do produto: ${error}`);
//     }
//   };

//   const adicionarAoCarrinho = () => {
//     if (produtoSelecionado) {
//       const novoCarrinho = [...carrinho, produtoSelecionado];
//       setCarrinho(novoCarrinho);

//       localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
//       alert("Produto adicionado");
//       console.log("Produto adicionado ao carrinho:", produtoSelecionado);
//     }
//   };

//   return (
//     <>
//       <NavBar />
//       <section>
//         <div className="ContainerProduto">
//           {produtoSelecionado ? (
//             <div className="produto-detalhes">
//               <div className="imagem">
//                 <img
//                   src={produtoSelecionado.url.replace(/\w\.jpg/gi, "W.jpg")}
//                   alt={produtoSelecionado.nomeProduto}
//                 />
//               </div>
//               <div className="infos">
//                 <h6>COD: {produtoSelecionado.idProduto}</h6>
//                 <h3>{produtoSelecionado.nomeProduto}</h3>
//                 <h4>{produtoSelecionado.marca}</h4>
//                 <h4>R${produtoSelecionado.preco}</h4>
//                 <h6>Descrição:</h6>
//                 <p>{produtoSelecionado.descricao}</p>
//                 <p>{produtoSelecionado.status_disponibilidade}</p>{" "}
//                 <button
//                   className="button-descricao"
//                   onClick={adicionarAoCarrinho}
//                 >
//                   Adicionar ao carrinho
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <p>Carregando informações do produto...</p>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default DescricaoProduto;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../decricaoProduto/descricao.css";
import api from "../../api";
import NavBar from "../../components/molecules/navBar/NavBar";
import Swal from "sweetalert2";  // Importando SweetAlert2

function DescricaoProduto() {
  const { idProduto } = useParams();
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (idProduto) {
      fetchProduto(idProduto);
    }
  }, [idProduto]);

  const fetchProduto = async (idProduto) => {
    try {
      const response = await api.get(`/produtos/${idProduto}`);
      setProdutoSelecionado(response.data);
    } catch (error) {
      console.log(`Erro ao buscar dados do produto: ${error}`);
    }
  };

  const adicionarAoCarrinho = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.isLoggedIn) {
      // Se o usuário estiver logado, adiciona o produto ao carrinho
      if (produtoSelecionado) {
        const novoCarrinho = [...carrinho, produtoSelecionado];
        setCarrinho(novoCarrinho);
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        
        // Exibe um pop-up de sucesso ao adicionar o produto ao carrinho
        Swal.fire({
          icon: 'success',
          title: 'Produto adicionado ao carrinho',
          showConfirmButton: false,
          timer: 2000
        });

        console.log("Produto adicionado ao carrinho:", produtoSelecionado);
      }
    } else {
      // Se o usuário não estiver logado, exibe o pop-up e redireciona para a página de login
      Swal.fire({
        icon: 'warning',
        title: 'Você precisa estar logado para adicionar produtos ao carrinho',
        showConfirmButton: true,
        confirmButtonText: 'Fazer login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <>
      <NavBar />
      <section>
        <div className="ContainerProduto">
          {produtoSelecionado ? (
            <div className="produto-detalhes">
              <div className="imagem">
                <img
                  src={produtoSelecionado.url.replace(/\w\.jpg/gi, "W.jpg")}
                  alt={produtoSelecionado.nomeProduto}
                />
              </div>
              <div className="infos">
                <h6>COD: {produtoSelecionado.idProduto}</h6>
                <h3>{produtoSelecionado.nomeProduto}</h3>
                <h4>{produtoSelecionado.marca}</h4>
                <h4>R${produtoSelecionado.preco}</h4>
                <h6>Descrição:</h6>
                <p>{produtoSelecionado.descricao}</p>
                <p>{produtoSelecionado.status_disponibilidade}</p>{" "}
                <button
                  className="button-descricao"
                  onClick={adicionarAoCarrinho}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ) : (
            <p>Carregando informações do produto...</p>
          )}
        </div>
      </section>
    </>
  );
}

export default DescricaoProduto;
