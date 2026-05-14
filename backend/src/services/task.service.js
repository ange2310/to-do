const { getTasks, createTask, getTaskByIdAndUserId, updateTaskByIdAndUserId } = require("../models/task.model");

//crear tarea
const createNewTask = async (title, description, userId)=>{
    const task = await createTask(title,description, userId);
    return{
        message:"Nueva tarea creada exitosamente",
        task:{
            id: task.id,
            user_id: task.user_id,
            title: task.title,
            description: task.description
        }
    };
}

//obtener todas las tareas de un usuario
const getTasksFromUser = async(userId)=>{
    const tasks = await getTasks(userId);
    return{
        message:"Tareas obtenidas exitosamente",
        tasks: tasks.map(task => ({
            id: task.id,
            title: task.title,
            description: task.description
        }))
    };
}
const updateTasksByUserId = async(userId,taskId) =>{
    const task = await getTaskByIdAndUserId(taskId, userId);
    if(!task){
        throw new Error("Tarea no encontrada para el usuario");
    }
    const updatedTask = await updateTaskByIdAndUserId(taskId, userId, !task.status);
    return{
        message:"Tarea actualizada exitosamente",
        task: {
            id: updatedTask.id,
            title: updatedTask.title,
            description: updatedTask.description,
            status: updatedTask.status
        }
    };
}

module.exports = {
    createNewTask,
    getTasksFromUser,
    updateTasksByUserId
}
