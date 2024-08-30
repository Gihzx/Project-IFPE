import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import RedefinirSenha from "./pages/RedefinirSenha/RedefinirSenha";
import RegistrarConta from "./pages/Registrarconta/RegistrarConta";
import RecuperarSenha from "./pages/RecuperarSenha/RecuperarSenha";
import PagePrincipal from "./pages/PagePrincipal/pagePrincipal";
import PageTabela from "./components/molecules/pageTabela/PageTabela";
import TabelaEstoque from "./pages/tabelas/tabelaEstoque/TabelaEstoque";
import TabelaRelatorio from "./pages/tabelas/tabelaRelatorio/tabelaRelatorio";
import TabelaProduto from "./pages/tabelas/TabeladeProduto/tabelaProduto";
import ProdutosPages from "./pages/Produtos/ProdutosPages";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagePrincipal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
        <Route path="/registrar-conta" element={<RegistrarConta />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/PageTabela" element={<PageTabela />} />
        <Route path="/estoque" element={<TabelaEstoque />} />
        <Route path="/relatorio" element={<TabelaRelatorio />} />
        <Route path="/produto" element={<TabelaProduto />} />
        <Route path="/produtoPages" element={<ProdutosPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
