const express = require('express');
require('dotenv').config();
require('./src/db/connection');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//Importar rutas
const routes = require('./src/routes/index');
app.use('/api', routes);


//Ruta principal
app.get('/',(req,res)=>{
    res.send('Hola Mundo');
})

//Iniciar escucha de peticiones
app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
})