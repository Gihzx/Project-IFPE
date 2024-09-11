import express from "express";
import cors from "cors";
import rotaUsuarios from "./routes/usuarios.js";
import rotaProdutos from "./routes/produtos.js";
import rotaPedidos from "./routes/pedidos.js";

// Se estiver usando body-parser, importe-o como módulo ES
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(cors());

// Se estiver usando body-parser, configure-o
app.use(bodyParser.json());

// Rotas
app.use("/usuarios", rotaUsuarios);
app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
