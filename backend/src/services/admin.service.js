const{getAllUsers, getTaskComplete, getAllTasks} = require('../models/admin.model');

const getStats = async()=>{
    const users = await getAllUsers();
    const tasks = await getAllTasks();
    const completedTasks = await getTaskComplete();
    return{
        message:"Estadísticas obtenidas exitosamente",
        stats:{
            total_users: parseInt(users[0].count),
            total_tasks: parseInt(tasks[0].count),
            completed_tasks: parseInt(completedTasks[0].count)
        }
    }
}

module.exports = {
    getStats
}