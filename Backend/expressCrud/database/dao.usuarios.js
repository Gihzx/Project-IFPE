import db from './config.js';

let operations = {
    list: function(){
        return db.promise().query('SELECT * FROM usuarios');
    },
    findById: function(idUsuario){
        return db.promise().query('SELECT * FROM usuarios WHERE idUsuario = ?', [idUsuario]);
    },
    save: function(cpf, tipo, nomeCliente, emailCliente, senha){
        return db.promise().execute(
            'INSERT INTO usuarios (nomeCliente, cpf, emailCliente, senha, tipo) VALUES (?, ?, ?, ?, ?)',
            [nomeCliente, cpf, emailCliente, senha, tipo]
        );
    },
    update: function(idUsuario, nomeCliente, cpf, emailCliente, senha, tipo){
        return db.promise().execute(
            'UPDATE usuarios SET nomeCliente = ?, cpf = ?, emailCliente = ?, senha = ?, tipo = ? WHERE idUsuario = ?',
            [nomeCliente, cpf, emailCliente, senha, tipo, idUsuario]
        );
    },
    remove: function(idUsuario){
        return db.promise().execute('DELETE FROM usuarios WHERE idUsuario = ?', [idUsuario]);
    }
}

export default operations;
