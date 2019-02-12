var app = require('./app_config');
var db = require('./db_config');
var motas = require('./motas');
var motasController = require('./motasController');
var routeMotas = require('./motasRoute');


app.get('/',function(request, response){
    response.sendfile('index.html');
});

app.use('/motas', routeMotas);
