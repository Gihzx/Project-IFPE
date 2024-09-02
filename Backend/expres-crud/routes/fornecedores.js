const express = require('express');
const db = require('../database/config')
const router = express.Router();
const dao = require('../database/dao.fornecedores');

router.get('/', function (req, res) {
    dao.list()
        .then(([rows]) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.status(500).send('Erro ao listar categorias');
        });
})

router.get('/:idFornecedor', function (req, res) {
    
    dao.findById().then(([rows]) => {
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send('Fornecedor não encontrado');
        }
    })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao buscar fornecedor');
        });
})

router.post('/', function (req, res) {
    dao.save(req.body)
    .then(([rows]) => {
        res.json(rows);
    }).catch(error => {
        console.error(error);
        res.status(500).send('Erro ao salvar a categoria');
    });
})

router.put('/:idFornecedor', function (req, res) {
    const idFornecedor = req.params.idFornecedor
    const cnpjFornecedor = req.params.cnpjFornecedor
    const nomeFornecedor = req.params.nomeFornecedor

    dao.update(idFornecedor, cnpjFornecedor, nomeFornecedor)
        .then(([rows]) => {
            res.send('Categoria atualizada com sucesso');
        }).catch(err => {
            console.log(err);
            res.status(500).send('Erro ao atualizar "fornecedores"');
        });
})

router.delete('/:idFornecedor', function (req, res) {
    const idFornecedor = req.params.idFornecedor;
    dao.remove(idFornecedor)
        .then(([rows]) => {
            res.send('Fornecedor removido com sucesso');
        }).catch(err => {
            console.log(err);
            res.status(500).send('Erro ao deletar "fornecedores"');
        });
})

module.exports = router;