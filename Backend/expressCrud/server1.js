const express = require('express');
const bodyParser = require('body-parser');
const mysql = require ('mysql2');
const PORT = 3000;

const app = express();     //Instância do Express - (Não sei se é necessario por que o meu pc não aguenta o express ;-;).

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ecomerce' //Mudar 'ecomerce' para o nome do banco de dados
});

db.connect(err => {
    if(err) {
        console.error('Erro ao tentar conectar-se com o banco de dados', err.message);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

//Tabela usuario
db.query(                                   
    'CREATE TABLE IF NOT EXISTS usuarios (idUsuario INTEGER AUTO_INCREMENT PRIMARY KEY, cpf VARCHAR(11), tipo BIT, emailCliente VARCHAR(100), nomeCliente VARCHAR(255),senha VARCHAR(10))',
    err => {                               //coloquei o ID como auto increment por boas praticas, porem se estiver errado mudar!!
        if (err) {
            console.error('Erro ao criar tabela',  (err.message));
            return;
        }
        console.log('Tabela "usuarios" criada ou já existente')
    }
);

app.get('/usuarios',(req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(results);
    });
});

app.get('/usuarios/:idUsuario', (req, res) => {
    const idUsuario = req.params.idUsuario;
    db.query('SELECT * FROM usuarios WHERE idUsuario = ?', [idUsuario], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Usuario não encontrado');
            return;
        }
        res.json(result[0]);
    });
});

app.post('/usuarios', (req, res) => {
    const {cpf, nomeCliente, emailCliente, senha, tipo} = req.body;
    db.query('INSERT INTO usuarios (cpf, nomeCliente, emailCliente, senha, tipo) VALUES (?, ?, ?, ?, ?)', [cpf, nomeCliente, emailCliente, senha, tipo], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.status(201).json({ idUsuario: result.insertId });
    });
});

app.put('/usuarios/:idUsuario', (req, res) =>{
    const idUsuario = req.params.idUsuario;
    const { cpf, nomeCliente, emailCliente, senha, tipo } = req.body;
    db.query('UPDATE usuarios SET cpf = ?, nomeCliente = ?, emailCliente = ?, senha = ?, tipo = ? WHERE idUsuario =?', [cpf, nomeCliente, emailCliente, senha, tipo], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }        
        if (result.affectedRows === 0) {
            res.status(404).send('Usuario não encontrado');
            return;
        }
        res.sendStatus(204);
    });
});

app.delete('/usuarios/:idUsuario', (req, res) => {
    const idUsuario = req.params.idUsuario;
    db.query('DELETE FROM usuarios WHERE idUsuario = ?', [idUsuario], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('Usuario não encontrado');
            return;
        }
        res.sendStatus(204);
    });
});

//Tabela categorias
db.query(                                   
    'CREATE TABLE IF NOT EXISTS categorias (nomeCategoria VARCHAR(100), idCategoria INTEGER AUTO_INCREMENT PRIMARY KEY)',
    err => {                               //coloquei o ID como auto increment por boas praticas, porem se estiver errado mudar!!
        if (err) {
            console.error('Erro ao criar tabela',  (err.message));
            return;
        }
        console.log('Tabela "categorias" criada ou já existente')
    }
);

app.get('/categorias',(req, res) => {
    db.query('SELECT * FROM categorias', (err, results) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(results);
    });
});

app.get('/categorias/:idCategoria', (req, res) => {
    const idCategoria = req.params.idCategoria;
    db.query('SELECT * FROM categorias WHERE idCategoria = ?', [idCategoria], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Categoria não encontrado');
            return;
        }
        res.json(result[0]);
    });
});

app.post('/categorias', (req, res) => {
    const {nomeCategoria} = req.body;
    db.query('INSERT INTO categorias (nomeCategoria) VALUES (?)', [nomeCategoria], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.status(201).json({ idCategoria: result.insertId });
    });
});

app.put('/categorias/:idCategoria', (req, res) =>{
    const idCategoria = req.params.idCategoria;
    const { nomeCategoria } = req.body;
    db.query('UPDATE categorias SET nomeCategoria = ? WHERE idCategoria =?', [nomeCategoria, idCategoria], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }        
        if (result.affectedRows === 0) {
            res.status(404).send('Categoria não encontrado');
            return;
        }
        res.sendStatus(204);
    });
});

app.delete('/categorias/:idCategoria', (req, res) => {
    const idCategoria = req.params.idCategoria;
    db.query('DELETE FROM categorias WHERE idCategoria = ?', [idCategoria], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('Categoria não encontrado');
            return;
        }
        res.sendStatus(204);
    });
});

//Tabela pedidos
db.query(
    'CREATE TABLE IF NOT EXISTS pedidos (idPedido INTEGER PRIMARY KEY AUTO_INCREMENT, dataEmissao DATE, statusPedido VARCHAR(30))',
    err => {    //coloquei o ID como auto increment por boas praticas, porem se estiver errado mudar!!
        if (err) {
            console.error('Erro ao criar tabela', (err.message));
            return;
        }
        console.log('Tabela "pedidos" criada ou já existente')
    }
);

app.get('/pedidos',(req, res) => {
    db.query('SELECT * FROM pedidos', (err, results) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(results);
    });
});

app.get('/pedidos/:idPedido', (req, res) => {
    const idPedido = req.params.idPedido;
    db.query('SELECT * FROM pedidos WHERE idPedido = ?', [idPedido], (err, result) => {
        if(err) {
            res.status(500).send(err.message);
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Pedido não encontrado');
            return;
        }
        res.json(result[0]);
    });
});

app.post('/pedidos', (req, res) => {
    const { dataEmissao, statusPedido } = req.body;
    db.query('INSERT INTO pedidos (dataEmissao, statusPedido) VALUES (?, ?)', [dataEmissao, statusPedido], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.status(201).json({ idPedido: result.insertId });
    });
});

app.put('/pedidos/:idPedido', (req, res) =>{
    const idPedido = req.params.idPedido;
    const { dataEmissao, statusPedido } = req.body;
    db.query('UPDATE pedidos SET dataEmissao = ?, statusPedido = ? WHERE idPedido =?', [dataEmissao, statusPedido], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }        
        if (result.affectedRows === 0) {
            res.status(404).send('Pedido não encontrado');
            return;
        }
        res.sendStatus(204);
    });
});

app.delete('/pedidos/:idPedido', (req, res) => {
    const idPedido = req.params.idPedido;
    db.query('DELETE FROM pedidos WHERE idPedido = ?', [idPedido], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('Pedido não encontrado');
            return;
        }
        res.sendStatus(204);
    });
});

//Tabela carrinho_Compras