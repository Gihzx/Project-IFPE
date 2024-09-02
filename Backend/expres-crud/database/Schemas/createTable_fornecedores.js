const db = require('../config');

exports.up = function(db) {
    return db.query(
        `CREATE TABLE IF NOT EXISTS fornecedores (
            idFornecedor INTEGER PRIMARY KEY AUTO_INCREMENT,
            cnpjFornecedor VARCHAR(14) NOT NULL,
            nomeFornecedor VARCHAR(100) NOT NULL
        )`,
        err => { 
            if (err) {
                console.error('Erro ao criar tabela "fornecedores"', err.message);
                return;
            }
            console.log('Tabela "fornecedores" criada ou já existente');
        }
    );
};

exports.down = function(db) {
    return db.query(
        'DROP TABLE IF EXISTS fornecedores',
        err => { 
            if (err) {
                console.error('Erro ao remover tabela "fornecedores"', err.message);
                return;
            }
            console.log('Tabela "fornecedores" removida');
        }
    );
};
