import express, { urlencoded } from 'express';
const router = express.Router();
import dao from '../database/dao.produtos.js'


router.get('/', function (req, res) {
    dao.list().then(([rows]) => {
        res.json(rows)
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro ao listar "produtos"');
    });

})

router.get('/:idProduto', function (req, res) {
    const idProduto = req.params.idProduto
    dao.findById(idProduto)
        .then(([rows]) => {
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
router.get('/categoria/:categoria', async (req, res) => {
    try {
        const { categoria } = req.params;
        const [produtos] = await dao.buscarPorCategoria(categoria);

        if (produtos.length) {
            res.json(produtos);
        } else {
            res.status(404).send('Nenhum produto encontrado para essa categoria.');
        }
    } catch (error) {
        console.error('Erro na busca por categoria:', error);
        res.status(500).send(error.message);
    }
});

// Em routes/produtos.js
router.get('/buscar', async (req, res) => {
    const searchTerm = req.query.search || '';

    try {
        let query = 'SELECT * FROM produtos';
        let params = [];

        if (searchTerm) {
            query += ' WHERE nomeProduto LIKE ?';
            params.push(`%${searchTerm}%`); // Busca parcial pelo nome do produto
        }

        const [produtos] = await dao.buscarPorTermo(searchTerm);
        res.json(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});







router.post('/', function (req, res) {
    const { nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, url } = req.body;
    dao.save(nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, url)
        .then((results) => {
            const result = results[0];
            res.status(201).json({ idProduto: result.insertId });
        }).catch(err => {
            console.log(err);
            res.status(500).send('Erro ao cadastrar o produto');
        });
})

router.put('/:idProduto', async (req, res) => {
    const idProduto = req.params.idProduto;
    const { nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, url } = req.body;

    try {
        const result = await dao.update(idProduto, nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, url);
        if (!result.success) {
            return res.status(404).send(result.message);
        }
        res.send(result.message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao atualizar o produto');
    }
});


router.delete('/:idProduto', async (req, res) => {
    const idProduto = req.params.idProduto;
    try {
        const produtoExistente = await dao.findById(idProduto);
        if (produtoExistente[0].length === 0) {
            return res.status(404).send('Produto não encontrado.');
        }

        const resultado = await dao.remove(idProduto);
        if (resultado.affectedRows === 0) {
            res.status(404).send('Produto não encontrado.');
        } else {
            res.send('Produto removido com sucesso!');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao deletar o produto');
    }
});


export default router;