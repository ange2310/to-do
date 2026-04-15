const {Pool} = require('pg');
require('dotenv').config();

const connection = new Pool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT,
});

connection.connect()
    .then(client => {
        console.log('Conexión a la base de datos establecida');
        client.release();
    })
    .catch(err => {
    console.error('Error al conectar a la base de datos', err);
    });