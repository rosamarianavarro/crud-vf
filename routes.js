//importar la app e servidor
let app = require('./app');

app.get('/', (req, res) => {
    res.send('Hola');

});
