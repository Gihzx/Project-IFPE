const db = require('./config')

let operations = {
    list: function(){
        return db.promise().query('SELECT * FROM produtos')
    },
    findById(idProduto){
        return db.promise().query('SELECT * FROM produtos where idProduto=?', [idProduto])
    },
    save: function(nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica){
        return db.promise().execute('INSERT INTO produtos (nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica])
    },
    update: function(idProduto, nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica){
        return db.promise().execute('UPDATE produtos SET nomeProduto = ?, modelo = ?, marca = ?, preco = ?, descricao = ?, quantidade = ?, status_disponibilidade = ?, categoria = ?, fichaTecnica = ? WHERE idProduto = ?', 
            [nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, fichaTecnica, idProduto])
    },

    remove: function(idProduto){
        return db.promise().execute('DELETE FROM produtos WHERE idProduto = ?', [idProduto])
    },
}

module.exports = operations