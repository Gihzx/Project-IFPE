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
    const { nomeCliente, cpf, logradouro, numero, bairro, cidade, emailCliente, senha, tipo } = req.body;


    dao.findByCpf(cpf)
        .then(([rows]) => {
            if (rows.length > 0) {

                return res.status(400).send('CPF já cadastrado.');
            }
            dao.save(nomeCliente, cpf, logradouro, numero, bairro, cidade, emailCliente, senha, tipo)
                .then((results) => {
                    const result = results[0];
                    res.status(201).json({ idUsuario: result.insertId });
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).send('Erro ao salvar Usuário');
                });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Erro ao buscar CPF no banco de dados.');
        });
});


router.post('/login', function (req, res) {
    const { email, senha } = req.body;

    // Primeiro, verifica se o email existe
    dao.findByEmail(email)
        .then(([rows]) => {
            if (rows.length === 0) {
                // Se o email não for encontrado, retorna uma mensagem de erro
                return res.status(404).send('Usuário não cadastrado.');
            }

            const usuario = rows[0]; // Obtem o usuário encontrado

            // Agora verifica se a senha corresponde
            if (usuario.senha === senha) {
                // Se a senha estiver correta, retorna o email do usuário
                res.json({
                    email: usuario.emailCliente,
                    senha: usuario.senha
                });
            } else {
                // Se a senha estiver incorreta, retorna uma mensagem de erro
                res.status(400).send('Senha incorreta.');
            }
        })
        .catch(error => {
            console.warn(error);
            res.status(500).send('Erro no servidor, tente novamente mais tarde.');
        });
});


router.put('/:idUsuarios', function(req, res) {
    const idUsuarios = req.params.idUsuarios;
    const { nomeCliente, cpf, logradouro, numero, bairro, cidade, emailCliente, senha, tipo } = req.body;

    dao.update(idUsuarios, nomeCliente, cpf, logradouro, numero, bairro, cidade, emailCliente, senha, tipo)
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
