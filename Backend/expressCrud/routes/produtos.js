const express = require('express');
const db = require('../database/config')
const router = express.Router();
const dao = require('../database/dao.produtos')

router.get('/', function (req, res){
    dao.list().then( ([rows]) =>{
        res.json(rows)
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro ao listar "produtos"');
    });

})

router.get('/:idProduto', function (req, res){
    const idProduto = req.params.idProduto
    dao.findById(idProduto)
        .then( ([rows]) =>{
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('Produto não encontrado.');
            }
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro ao listar "produto"');
    });
})

router.post('/', function(req, res){
    const {nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica} = req.body;
    dao.save(nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica)
        .then( (results) =>{
            const result = results[0];
            res.status(201).json({idProduto: result.insertId});
        }).catch(err => {
            console.log(err);
            res.status(500).send('Erro ao cadastrar o produto');
        });
})

router.put('/:idProduto', function(req, res){
    const idProduto = req.params.idProduto;
    const {nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica} = req.body;
    
    dao.update(idProduto, nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica)
        .then( ([result]) =>{
            res.send("Produto atualizado com sucesso!")
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro ao atualizar o produto');
    });
})

router.delete('/:idProduto', function(req, res){
    const idProduto = req.params.idProduto
    dao.remove(idProduto)
    .then( ([result]) =>{
        res.send("Produto removido com sucesso!")
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro ao deletar o produto');
    });
})

module.exports = router;