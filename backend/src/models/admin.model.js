const connection = require('../db/connection');

const getAllUsers = async()=>{
    const query = `
    SELECT COUNT(*) FROM users;
    `;
    const result = await connection.query(query);
    return result.rows;
}

const getTaskComplete = async () => {
    const query = `SELECT COUNT(*) FROM tasks WHERE status = TRUE`;
    const result = await connection.query(query);
    return result.rows;
}
const getAllTasks = async()=> {
    const result = await connection.query('SELECT COUNT(*) FROM tasks');
    return result.rows;
}

module.exports = {
    getAllUsers,
    getTaskComplete,
    getAllTasks
}