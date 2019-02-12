var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var motasSchema = new Schema({
    marca: String,
    modelo: String,
    cor: String,
    cilindrada: String,
    preco: String,
});

module.exports = mongoose.model('motas', motasSchema);