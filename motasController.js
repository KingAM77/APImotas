var motas = require('./motas');

exports.save = function (marca, modelo, cor, cilindrada, preco, callback) {
    new motas({
        'marca': marca,
        'modelo': modelo,
        'cor': cor,
        'cilidrada': cilindrada,
        'preco': preco,
    }).save(function (error, motas) {
        if (error) {
            callback({ error: 'Não foi possivel adicionar' });
        } else {
            callback(motas)
        }
    });
}

exports.list = function (callback) {
    motas.find({}, function (error, motas) {
        if (error) {
            callback({ error: 'Não se encontrou nenhum resultado !' });
        } else {
            callback(motas);
        }
    });

}

exports.delete = function (id, callback) {
    motas.findById(id, function (error, motas) {
        if (error) {
            callback({ error: 'Não foi possivel eliminar a mota !' });
        } else {
            motas.remove(function (error) {
                if (!error) {
                    callback({ resposta: "mota eliminada com sucesso !" })
                }
            });
        }
    })

}