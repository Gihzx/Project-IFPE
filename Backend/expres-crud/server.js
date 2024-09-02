const express = require('express');
const rotaFornecedores = require('./routes/fornecedores.js');
const rotaProdutos = require('./routes/produtos.js');
const rotaCategoria = require('./routes/categorias.js');
const schemaCategorias = require('./database/Schemas/createTable_categoria.js')
const schemaFornecedores = require('./database/Schemas/createTable_fornecedores.js')
const schemaProdutos = require('./database/Schemas/createTable_produto.js')
const db = require('./database/config.js')

const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

// Rodar os schemas
const startServer = () => {
    schemaFornecedores.up(db);
    schemaCategorias.up(db);
    schemaProdutos.up(db);

    // Rotas
    app.use('/fornecedores', rotaFornecedores);
    app.use('/categorias', rotaCategoria);
    app.use('/produtos', rotaProdutos);

    // Iniciar o servidor
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
};

startServer();
