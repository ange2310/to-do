const connection = require('../db/connection');

 //crear tarea
 const createTask = async(title,description, userId) => {
    const query = `
    INSERT INTO tasks (title,description,user_id)
    VALUES ($1,$2,$3)
    RETURNING *;
    `;
    const values = [title,description, userId];
    const result = await connection.query(query,values);
    return result.rows[0];
 };

 //obtener todas las tareas por usuario
 const getTasks = async(userId)=> {
    const result = await connection.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
    return result.rows;
 };

 const getTaskByIdAndUserId = async(taskId, userId) =>{
      const query = `
      SELECT * FROM tasks WHERE user_id = $1 AND id = $2;
      `;
      const values = [userId, taskId];
      const result = await connection.query(query,values);
      return result.rows[0];
 }

  const updateTaskByIdAndUserId = async(taskId, userId, status) =>{
      const query = `
      UPDATE tasks SET status = $1 WHERE id = $2 AND user_id = $3 RETURNING *;
      `;
      const values = [status, taskId, userId];
      const result = await connection.query(query,values);
      return result.rows[0];
 }

 module.exports = {
    createTask,
    getTasks,
    getTaskByIdAndUserId,
    updateTaskByIdAndUserId
 }
