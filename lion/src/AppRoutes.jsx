import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./Home";
import RedefinirSenha from "./pages/RedefinirSenha/RedefinirSenha";
import RegistrarConta from "./pages/Registrarconta/RegistrarConta";
import RecuperarSenha from "./pages/RecuperarSenha/RecuperarSenha";
import PagePrincipal from "./pages/PagePrincipal/pagePrincipal";
import PageTabela from "./components/molecules/pageTabela/PageTabela";
import TabelaEstoque from "./pages/tabelas/tabelaEstoque/TabelaEstoque";
import TabelaRelatorio from "./pages/tabelas/tabelaRelatorio/tabelaRelatorio";
import TabelaProduto from "./pages/tabelas/TabeladeProduto/tabelaProduto";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagePrincipal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
        <Route path="/registrar-conta" element={<RegistrarConta />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/PageTabela" element={<PageTabela />} />
        <Route path="/estoque" element={<TabelaEstoque />} />
        <Route path="/relatorio" element={<TabelaRelatorio />} />
        <Route path="/produto" element={<TabelaProduto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
