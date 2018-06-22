console.clear();

//importar la app e servidor
let app = require('./app');

//importar las rutas
let  routes = require('./routes')

//arrancar el servidor 
app.listen(3000,() =>{
    console.log('servidor arrancado');
});
