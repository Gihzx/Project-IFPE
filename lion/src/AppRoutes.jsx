import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/Login/Login";
import RedefinirSenha from "./pages/RedefinirSenha/RedefinirSenha";
import RegistrarConta from "./pages/Registrarconta/RegistrarConta";
import RecuperarSenha from "./pages/RecuperarSenha/RecuperarSenha";
import LandingPage from "./pages/landingPage2/landingPage"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
        <Route path="/registrar-conta" element={<RegistrarConta />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/Home" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
