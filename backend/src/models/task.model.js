const connection = require('../db/connection');

 //crear tarea
 const createTask = async(title,description) => {
    const query = `
    INSERT INTO tasks (title,description)
    VALUES ($1,$2)
    RETURNING *;
    `;
    const values = [title,description];
    const result = await connection.query(query,values);
    return result.rows[0];
 };

 //obtener todas las tareas
 const getTasks = async()=> {
    const result = await connection.query('SELECT * FROM tasks');
    return result.rows;
 };

 module.exports = {
    createTask,
    getTasks
 }