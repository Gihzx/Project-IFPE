const express = require('express');
const db = require('../database/config');
const router = express.Router();
const dao = require('../database/dao.categoria');

router.get('/', function (req, res) {
    dao.list()
        .then(([rows]) => {
            res.json(rows); 
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao listar categorias');
        });
});

router.get('/:idCategoria', function (req, res) {
    const idCategoria = req.params.idCategoria;
    dao.findById(idCategoria)
        .then(([rows]) => {
            if (rows.length > 0) {
                res.json(rows[0]); 
            } else {
                res.status(404).send('Categoria não encontrada');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao buscar categoria');
        });
});

router.post('/', function(req, res) {
    dao.save(req.body)
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Erro ao salvar a categoria');
        });
});

router.put('/:idCategoria', function (req, res) {
    const idCategoria = req.params.idCategoria;
    const atualizacaoCategoria = req.body;
    dao.update(idCategoria, atualizacaoCategoria)
        .then(([result]) => {
            res.send('Categoria atualizada com sucesso');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao atualizar categoria');
        });
});

router.delete('/:idCategoria', function (req, res) {
    const idCategoria = req.params.idCategoria;
    dao.remove(idCategoria)
        .then(([result]) => {
            res.send('Categoria removida com sucesso');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao remover categoria');
        });
});

module.exports = router;
