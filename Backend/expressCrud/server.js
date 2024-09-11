import express from 'express';
import bodyParser from 'body-parser';

import rotaUsuarios from './routes/usuarios.js';
import rotaProdutos from './routes/produtos.js';
import rotaPedidos from './routes/pedidos.js';

const app = express();

const bodyParser = require("body-parser");
const PORT = 3003;
const cors = require("cors");
const PORT = 3000;


import db from'./database/config.js';

app.use(bodyParser.json());

// Rotas
app.use('/usuarios', rotaUsuarios);
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;