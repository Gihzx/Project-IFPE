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
    save: function(cpf, tipo, logradouro, numero, cidade, nomeCliente, emailCliente, senha){
        return db.promise().execute(
            'INSERT INTO usuarios (nomeCliente, cpf, logradouro, numero, cidade, emailCliente, senha, tipo) VALUES (?, ?, ?, ?, ?, ?, ?, ? )',
            [ logradouro,cpf, nomeCliente, cidade, numero, emailCliente, senha, tipo]
        );
    },
    update: function(idUsuario, nomeCliente, cpf, logradouro, numero, cidade,  emailCliente, senha, tipo){
        return db.promise().execute(
            'UPDATE usuarios SET nomeCliente = ?, cpf = ?, logradouro = ?, rua = ?, cidade = ?, emailCliente = ?, senha = ?, tipo = ? WHERE idUsuario = ?',
            [nomeCliente, cpf, emailCliente, senha, tipo, idUsuario]
        );
    },
    remove: function(idUsuario){
        return db.promise().execute('DELETE FROM usuarios WHERE idUsuario = ?', [idUsuario]);
    }
}

export default operations;
