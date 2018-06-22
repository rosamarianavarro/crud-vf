//importar la app e servidor
let app = require('./app');

let addPersonToDB = require('./addPersonToDB');

app.get('/', (req, res) => {
    res.send('<a href="/contacto">Contacto</a>')
});

app.get('/contacto', (req, res) => {
    res.render('contacto.html')
});


app.post('/addPerson', (req, res) => {
    
    let newPerson = req.body;
    addPersonToDB(newPerson);
});
