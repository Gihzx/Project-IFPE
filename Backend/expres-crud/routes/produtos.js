const express = require('express');
const db = require('../database/config')
const router = express.Router();
const dao = require('../database/dao.produtos')

router.get('/', function (req, res){
    dao.list().then( ([rows]) =>{
        console.log(rows)
    }).catch(console.log)

    //res.render('produtos/list')
})

router.get('/:idProdutos', function (req, res){
    dao.findById().then( ([rows]) =>{
        console.log(rows)
    }).catch(console.log)
})

router.post('/', function(req, res){
    dao.save().then( ([rows]) =>{
        console.log(rows)
    }).catch(console.log)
})

router.put('/:idProdutos', function(req, res){
    dao.update().then( ([rows]) =>{
        console.log(rows)
    }).catch(console.log)
})

router.delete('/:idProdutos', function(req, res){
    dao.remove().then( ([rows]) =>{
        console.log(rows)
    }).catch(console.log)
})

module.exports = router;