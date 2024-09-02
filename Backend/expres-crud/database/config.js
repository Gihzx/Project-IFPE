const mysql = require('mysql2');

//Conexão inical com o banco de dados e a criação do database

const connetion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3311
});

connetion.connect(err => {
    if (err) {
        console.error('Erro na conexão com o banco de dados:', err.message);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

connetion.query('CREATE DATABASE IF NOT EXISTS ecommerce', (err) => {
    if (err) {
        console.error('Erro ao criar banco de dados:', err.message);
        return;
    }
    console.log('Banco de dados "ecommerce" criado ou já existente');

    connetion.changeUser({ database: 'ecommerce' }, (err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err.message);
            return;
        }
        console.log('Conectado ao banco de dados "ecommerce"');
    });
});

// Conectar ao banco de dados 'ecommerce'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ecommerce',
    port: 3311
});

module.exports = db