const db = require('./config');

let operations = {
    list(){
        return db.promise().query('SELECT * FROM fornecedores')
    },
    findById(idFornecedor){
        return db.promise().query('SELECT * FROM fornecedores WHERE idFornecedor = ?', [idFornecedor])
    },
    save: function(fornecedores){
        return db.promise().execute('INSERT INTO fornecedores (cnpjFornecedor, nomeFornecedor) VALUES (?, ?)', [cnpjFornecedor, nomeFornecedor])
    },
    update: function(fornecedores){
        return db.promise().execute('UPDATE fornecedores SET cnpjFornecedor = ?, nomeFornecedor = ?',  [cnpjFornecedor, nomeFornecedor])
    },
    remove: function(idFornecedor){
        return db.promise().execute('DELETE FROM fornecedores WHERE idFornecedor = ?', [idFornecedor])
    }
    
}
module.exports = operations