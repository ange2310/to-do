const connection = require('../db/connection');


const findUserByEmail = async (email) => {
    const query = `
    SELECT*FROM users WHERE email = $1;
    `;
    const values = [email];
    const result = await connection.query(query, values);
    return result.rows[0]; //retorna el usuario o undefined si no existe
}

//Obtener usuario por ID
const findUserById = async(id)=>{
    const query = `
    SELECT * FROM users WHERE id = $1;
    `;
    const values = [id];
    const result = await connection.query(query, values);
    return result.rows[0]; 
}

//Registrar usuario
const insertUser = async (name, email , password)=>{
    const query = `
    INSERT INTO users (name, email, hash_password)
    VALUES($1,$2,$3)
    RETURNING *;
    `;
    const values = [name, email, password];
    const result = await connection.query(query,values);
    return result.rows[0];
}

module.exports = {
    insertUser,
    findUserByEmail,
    findUserById
}