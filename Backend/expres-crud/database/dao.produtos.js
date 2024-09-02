const db = require('./config')

let operations = {
    list: function(){
        return db.promise().query('SELECT * FROM produtos')
    },
    findById(idProduto){
        return db.promise().query('SELECT * FROM produtos where idProduto=?', [idProduto])
    },
    save: function(produtos){
        return db.promise().execute('INSERT INTO produtos (descricao, nomeProduto, modelo, marca, preco, cor, dimensoes, peso, capacidade, processador, tela, sistema_operacional, conectividade, portas_entradas, bateria, voltagem, data_lancamento, quantidade, status_disponibilidade, idCategoria, idFornecedor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?', 
            [descricao, nomeProduto, modelo, marca, preco, cor, dimensoes, peso, capacidade, processador, tela, sistema_operacional, conectividade, portas_entradas, bateria, voltagem, data_lancamento, quantidade, status_disponibilidade, idCategoria, idFornecedor])
    },
    update: function(produtos){
        return db.promise().execute('UPDATE produtos set descricao , nomeProduto = ?, modelo = ?, marca = ?, preco = ?, cor = ?, dimensoes = ?, peso = ?, capacidade = ?, processador = ?, tela = ?, sistema_operacional = ?, conectividade = ?, portas_entradas = ?, bateria = ?, voltagem = ?, data_lancamento = ?, quantidade = ?, status_disponibilidade = ?, idCategoria = ?, idFornecedor = ?, where idProduto = ?', 
            [descricao, nomeProduto, modelo, marca, preco, cor, dimensoes, peso, capacidade, processador, tela, sistema_operacional, conectividade, portas_entradas, bateria, voltagem, data_lancamento, quantidade, status_disponibilidade, idCategoria, idFornecedor])
    },
    remove: function(idProduto){
        return db.promise().execute('DELETE FROM produtos WHERE idProduto = ?', [idProduto])
    },
}

module.exports = operations