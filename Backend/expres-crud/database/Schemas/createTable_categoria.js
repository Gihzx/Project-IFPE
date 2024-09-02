const express = require("express");
const db = require('../config');

exports.up = function(db) {
    return db.query(
        `CREATE TABLE IF NOT EXISTS categorias (
            idCategoria INTEGER AUTO_INCREMENT PRIMARY KEY, 
            nomeCategoria VARCHAR(100) NOT NULL)`,
        err => {
            if (err) {
                console.error('Erro ao criar tabela "categorias"', (err.message));
                return;
            }
            console.log('Tabela "categorias" criada ou já existente')
        }
    );
};

exports.down = function(db) {
    return db.query(
        'DROP TABLE IF EXISTS categorias',
        err => { 
            if (err) {
                console.error('Erro ao remover tabela "categorias"', err.message);
                return;
            }
            console.log('Tabela "categorias" removida');
        }
    );
};