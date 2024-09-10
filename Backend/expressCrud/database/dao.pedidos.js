import db from './config.js';

let operations = {
    list: function() {
        console.log("Executando list para listar todos os pedidos.");
        return db.promise().query('SELECT * FROM pedidos')
            .then(result => {
                console.log("Resultado da query list:", result);
                return result;
            })
            .catch(err => {
                console.log("Erro na query list:", err);
                throw err;
            });
    },

    findById: function(idPedido) {
        console.log("Executando findById com idPedido:", idPedido);
        return db.promise().query('SELECT * FROM pedidos WHERE idPedido = ?', [idPedido])
            .then(result => {
                console.log("Resultado da query findById:", result);
                return result;
            })
            .catch(err => {
                console.log("Erro na query findById:", err);
                throw err;
            });
    },

    save: function(dataEmissao, statusPedido, idUsuario, idProduto) {
        console.log("Executando save para criar um novo pedido.");
        return db.promise().execute('INSERT INTO pedidos (dataEmissao, statusPedido, idUsuario, idProduto) VALUES (?, ?, ?, ?)', 
            [dataEmissao, statusPedido, idUsuario, idProduto])
            .then(result => {
                console.log("Resultado da query save:", result);
                return result;
            })
            .catch(err => {
                console.log("Erro na query save:", err);
                throw err;
            });
    },

    update: function(idPedido, dataEmissao, statusPedido, idUsuario, idProduto) {
        console.log("Executando update para atualizar o pedido com idPedido:", idPedido);
        return db.promise().execute('UPDATE pedidos SET dataEmissao = ?, statusPedido = ?, idUsuario = ?, idProduto = ? WHERE idPedido = ?', 
            [dataEmissao, statusPedido, idUsuario, idProduto, idPedido])
            .then(result => {
                console.log("Resultado da query update:", result);
                return result;
            })
            .catch(err => {
                console.log("Erro na query update:", err);
                throw err;
            });
    },

    remove: function(idPedido) {
        console.log("Executando remove para deletar o pedido com idPedido:", idPedido);
        return db.promise().execute('DELETE FROM pedidos WHERE idPedido = ?', [idPedido])
            .then(result => {
                console.log("Resultado da query remove:", result);
                return result;
            })
            .catch(err => {
                console.log("Erro na query remove:", err);
                throw err;
            });
    }
}

export default operations;
