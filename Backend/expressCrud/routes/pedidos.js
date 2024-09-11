import express from 'express';
const router = express.Router();
import dao from '../database/dao.pedidos.js';

router.get('/', function (req, res) {
    console.log("Requisição GET para listar todos os pedidos recebida.");
    
    dao.list()
        .then(([rows]) => {
            console.log("Resultado da consulta de listagem:", rows);
            res.json(rows);
        })
        .catch(err => {
            console.log("Erro ao listar todos os pedidos:", err);
            res.status(500).send('Erro ao listar "pedidos"');
        });
});

router.get('/:idPedido', function (req, res) {
    console.log("Requisição GET para obter um pedido com idPedido:", req.params.idPedido);
    const idPedido = req.params.idPedido;

    dao.findById(idPedido)
        .then(([rows]) => {
            console.log("Resultado da consulta findById:", rows);
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('Pedido não encontrado.');
            }
        })
        .catch(err => {
            console.log("Erro ao listar o pedido:", err);
            res.status(500).send('Erro ao listar "pedidos"');
        });
});

router.post('/', function(req, res) {
    console.log("Dados recebidos no body:", req.body);
    const { dataEmissao, statusPedido, idUsuario, idProduto } = req.body;

    // Verifica se algum dos campos é undefined
    if (!dataEmissao || !statusPedido || !idUsuario || !idProduto) {
        console.log("Erro: Um ou mais campos estão undefined.");
        return res.status(400).send("Erro: Um ou mais campos estão faltando.");
    }

    dao.save(dataEmissao, statusPedido, idUsuario, idProduto)
        .then((result) => {
            console.log("Pedido criado com sucesso:", result);
            res.status(201).json({ idPedido: result[0].insertId });
        })
        .catch(err => {
            console.log("Erro ao criar pedido:", err);
            res.status(500).send('Erro ao criar pedido');
        });
});


router.put('/:idPedido', function(req, res) {
    console.log("Requisição PUT para atualizar o pedido com idPedido:", req.params.idPedido);
    const idPedido = req.params.idPedido;
    const { dataEmissao, statusPedido, idUsuario, idProduto } = req.body;

    dao.update(idPedido, dataEmissao, statusPedido, idUsuario, idProduto)
        .then((result) => {
            console.log("Pedido atualizado com sucesso:", result);
            res.send("Pedido atualizado com sucesso!");
        })
        .catch(err => {
            console.log("Erro ao atualizar pedido:", err);
            res.status(500).send('Erro ao atualizar pedido');
        });
});

router.delete('/:idPedido', function(req, res) {
    console.log("Requisição DELETE para remover o pedido com idPedido:", req.params.idPedido);
    const idPedido = req.params.idPedido;

    dao.remove(idPedido)
        .then((result) => {
            console.log("Pedido deletado com sucesso:", result);
            res.send("Pedido deletado com sucesso!");
        })
        .catch(err => {
            console.log("Erro ao deletar pedido:", err);
            res.status(500).send('Erro ao deletar pedido');
        });
});

export default router;
