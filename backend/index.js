const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

//Ruta principal
app.get('/',(req,res)=>{
    res.send('Hola Mundo');
})

//Iniciar escucha de peticiones
app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})