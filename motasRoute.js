var express = require('express');
var router = express.Router();
var motasController = require('./motasController');


router.get('/', function (req, res) {
    motasController.list(function (resp) {
        res.json(resp);
    })

});

router.post('/inserir', function (req, res) {
    var marca = req.body.marca;
    var modelo = req.body.modelo;
    var cor = req.body.cor;
    var cilindrada = req.body.cilindrada;
    var preco = req.body.preco;

    motasController.save(marca, modelo, cor, cilindrada, preco, function (resp) {
        res.json(resp);
    });
});

router.delete('/apagar/:id', function (req, res) {
    var id = req.params.id;

    motasController.delete(id, function (resp) {
        res.json(resp);
    });
})

module.exports = router;
