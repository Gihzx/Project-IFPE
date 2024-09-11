const mysql = require("mysql2");

//Conexão inical com o banco de dados e a criação do database

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "lionEletronics",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Erro na conexão com o banco de dados:", err.message);
    return;
  }
  console.log("Conectado ao banco de dados MySQL");
});

// connetion.query('CREATE DATABASE IF NOT EXISTS lionEletronics', (err) => {
//     if (err) {
//         console.error('Erro ao criar banco de dados:', err.message);
//         return;
//     }
//     console.log('Banco de dados "lionEletronics" criado ou já existente');

//     connetion.changeUser({ database: 'lionEletronics' }, (err) => {
//         if (err) {
//             console.error('Erro ao conectar ao banco de dados:', err.message);
//             return;
//         }
//         console.log('Conectado ao banco de dados "lionEletronics"');
//     });
// });

// Conectar ao banco de dados 'ecommerce'

module.exports = db;
