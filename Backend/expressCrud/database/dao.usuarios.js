import db from './config.js';

let operations = {
    list: function(){
        return db.promise().query('SELECT * FROM usuarios');
    },
    findById: function(idUsuario){
        return db.promise().query('SELECT * FROM usuarios WHERE idUsuario = ?', [idUsuario]);
    },
    findByEmailAndPassword: function(email, senha) {
        return db.promise().query('SELECT emailCliente, senha FROM usuarios WHERE emailCliente = ? AND senha = ?', 
            [email, senha]
        );
    },
    findByCpf: function(cpf) {
        return db.promise().query('SELECT * FROM usuarios WHERE cpf = ?', [cpf]);
    },
    findByEmail: function(email) {
        return db.promise().query('SELECT * FROM usuarios WHERE emailCliente = ?', [email]);
    },
    
    
    save: function(nomeCliente, cpf, logradouro, numero, bairro, cidade, emailCliente, senha, tipo){
        return db.promise().execute(
            'INSERT INTO usuarios (nomeCliente, cpf, logradouro, numero, bairro, cidade, emailCliente, senha, tipo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ? )',
            [ nomeCliente, cpf, logradouro, numero, bairro, cidade, emailCliente, senha, tipo]
        );
    },
    update: function(idUsuario, nomeCliente, cpf, logradouro, numero, bairro, cidade, emailCliente, senha, tipo){
        return db.promise().execute(
            'UPDATE usuarios SET nomeCliente = ?, cpf = ?, logradouro = ?, numero = ?, bairro = ?, cidade = ?, emailCliente = ?, senha = ?, tipo = ? WHERE idUsuario = ?',
            [nomeCliente, cpf, logradouro, numero, bairro, cidade, emailCliente, senha, tipo, idUsuario]
        );
    },
    remove: function(idUsuario){
        return db.promise().execute('DELETE FROM usuarios WHERE idUsuario = ?', [idUsuario]);
    }
}

export default operations;
