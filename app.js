//configuracion del web server

//importar el modulo de express
let express = require('express');

//importar bodyParser
let bodyParser = require('body-parser');

//crear el servidor
let app = express();

//usar bodyParser que nos transforme los objetos enviados
//por POST del cliente
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//usar ejs para servir ficheros html al cliente (lecker)
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//ex`portar la variable app para poder 
//importarla en index.js
module.exports = app;