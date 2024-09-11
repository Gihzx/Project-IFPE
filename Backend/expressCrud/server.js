const express = require("express");
const rotaUsuarios = require("./routes/usuarios.js");
const rotaProdutos = require("./routes/produtos.js");
const rotaPedidos = require("./routes/pedidos.js");
const db = require("./database/config.js");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3003;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use("/usuarios", rotaUsuarios);
app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
