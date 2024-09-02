const express = require("express");
const db = require('../config');

exports.up = function (db) {
    return db.query(
        `CREATE TABLE IF NOT EXISTS produtos ( 
            idProduto INTEGER PRIMARY KEY AUTO_INCREMENT,
            descricao VARCHAR(500) NOT NULL,
            nomeProduto VARCHAR(100) NOT NULL,
            modelo VARCHAR(100) NOT NULL,
            marca VARCHAR(30) NOT NULL,
            preco DECIMAL(6,2) NULL,
            cor VARCHAR(30) NOT NULL,
            dimensoes VARCHAR(100),
            peso VARCHAR(30),
            capacidade VARCHAR(30),
            processador VARCHAR(100),
            tela VARCHAR(100),
            sistema_operacional VARCHAR(100),
            conectividade VARCHAR(100),
            portas_entradas VARCHAR(100),
            bateria VARCHAR(100),
            voltagem VARCHAR(100),
            data_lancamento DATE,
            quantidade INTEGER,
            status_disponibilidade VARCHAR(30),
            idCategoria INTEGER NOT NULL,
            idFornecedor INTEGER NOT NULL)`,
        err => {
            if (err) {
                console.error('Erro ao criar tabela "produtos"', (err.message));
                return;
            }
            console.log('Tabela "produtos" criada ou já existente')
        }
    );
};

exports.down = function(db) {
    return db.query(
        'DROP TABLE IF EXISTS produtos',
        err => { 
            if (err) {
                console.error('Erro ao remover tabela "produtos"', err.message);
                return;
            }
            console.log('Tabela "produtos" removida');
        }
    );
};