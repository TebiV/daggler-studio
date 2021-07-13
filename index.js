const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const port = process.env.PORT || 3001;

const app = express();
//HOLA ESTO ES UN COMENTARIO


//capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Conexion a base de datos.
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@veterinaria.yhplo.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri, option)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e));

//Motor de plantilla
app.set('view engine','ejs');
//Plantillas
app.set('views', __dirname + '/views');


//Importar rutas

//AuthRout
//ValidarToken
//Album
//Imagenes (DetalleAlbum)
//Index
//Carrito (validar token)
//Pago (validar token)

//Rutas del middleware
//app.use('/api/cart',validaToken,cart)
//app.use('/api/payment',validaToken,payment)


//Servidor
app.listen(port, ()=>{
    console.log('Listening');
})

