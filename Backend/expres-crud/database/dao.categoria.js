const db = require('./config');

let operations = {
    list() {
        return db.promise().query('SELECT * FROM categorias');
    },
    findById(idCategoria) {
        return db.promise().query('SELECT * FROM categorias WHERE idCategoria = ?', [idCategoria]);
    },
    save(categoria) {
        return db.promise().execute('INSERT INTO categorias (nomeCategoria) VALUES (?)', [categoria.nomeCategoria]);
    },
    update(idCategoria, categoria) {
        return db.promise().execute('UPDATE categorias SET nomeCategoria = ? WHERE idCategoria = ?', [categoria.nomeCategoria, idCategoria]);
    },
    remove(idCategoria) {
        return db.promise().execute('DELETE FROM categorias WHERE idCategoria = ?', [idCategoria]);
    }
};

module.exports = operations;
