import express from 'express';
import dao from '../database/dao.usuarios.js';

const router = express.Router();

router.get('/', function (req, res) {
    dao.list()
        .then(([rows]) => {
            res.json(rows);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao listar "usuarios"');
        });
});

router.get('/:idUsuarios', function (req, res) {
    const idUsuarios = req.params.idUsuarios;
    dao.findById(idUsuarios)
        .then(([rows]) => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).send('Usuário não encontrado.');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao buscar Usuário');
        });
});

router.post('/', function (req, res) {
    const { cpf, tipo, nomeCliente, emailCliente, senha } = req.body;

    dao.save(cpf, tipo, nomeCliente, emailCliente, senha)
        .then((results) => {
            const result = results[0]; 
            res.status(201).json({ idUsuario: result.insertId});
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Erro ao salvar Usuário');
        });
});

router.put('/:idUsuarios', function(req, res) {
    const idUsuarios = req.params.idUsuarios;
    const { nomeCliente, cpf, emailCliente, senha, tipo } = req.body;

    dao.update(idUsuarios, nomeCliente, cpf, emailCliente, senha, tipo)
        .then(() => {
            res.send('Usuário atualizado com sucesso.');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao atualizar Usuário');
        });
});

router.delete('/:idUsuarios', function (req, res) {
    const idUsuarios = req.params.idUsuarios;
    dao.remove(idUsuarios)
        .then(([result]) => {
            res.send('Usuário removido com sucesso');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Erro ao remover Usuário');
        });
});

export default router;
