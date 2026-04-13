const express = require('express');
const app = express();
const port = 3000;

//Ruta principal
app.get('/',(req,res)=>{
    res.send('Hola Mundo');
})

//Iniciar escucha de peticiones
app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})