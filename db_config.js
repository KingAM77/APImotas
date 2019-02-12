var mongoose = require('mongoose');

var urlString = 'mongodb://alex:KingAM77@ds017584.mlab.com:17584/motas_db';

mongoose.connect(urlString, function (err, res) {
    if (err) {
        console.log('Impossivel ligar a:' + urlString);
    }
    else {
        console.log('Ligado a:' + urlString);
    }
});