import db from './config.js';

let operations = {
    list: function() {
        return db.promise().query('SELECT * FROM produtos');
    },

    findById: function(idProduto) {
        return db.promise().query('SELECT * FROM produtos WHERE idProduto = ?', [idProduto]);
    },

    save: function(nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, url) {
        if (!nomeProduto || !modelo || !marca || !preco || !descricao || !status_disponibilidade || !categoria) {
            throw new Error("Todos os campos obrigatórios devem ser fornecidos e válidos.");
        }
        quantidade = quantidade ?? null; 
        url = url ?? null; 

        return db.promise().execute(
            'INSERT INTO produtos (nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, url]
        );
    },

    update: async function(idProduto, nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, url) {
        try {
            const [products] = await db.promise().query('SELECT * FROM produtos WHERE idProduto = ?', [idProduto]);
            if (products.length === 0) {
                return { success: false, message: "Produto não encontrado." };
            }
    
            const [result] = await db.promise().execute(
                'UPDATE produtos SET nomeProduto = ?, modelo = ?, marca = ?, preco = ?, descricao = ?, quantidade = ?, status_disponibilidade = ?, categoria = ?, url = ? WHERE idProduto = ?', 
                [nomeProduto, modelo, marca, preco, descricao, quantidade, status_disponibilidade, categoria, url, idProduto]
            );
    
            if (result.affectedRows === 0) {
                return { success: false, message: "Nenhuma alteração foi realizada." };
            }
    
            return { success: true, message: "Produto atualizado com sucesso." };
        } catch (err) {
            console.error('Erro ao atualizar produto:', err);
            return { success: false, message: err.message };
        }
    },
        
    remove: function(idProduto) {
        return db.promise().execute('DELETE FROM produtos WHERE idProduto = ?', [idProduto]);
    }
};

export default operations;
