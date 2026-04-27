const { getTasks, createTask } = require("../models/task.model");

//crear tarea
const createNewTask = async (title, description)=>{
    const task = await createTask(title,description);
    return{
        message:"Nueva tare creada exitosamente",
        task:{
            id: task.id,
            title: task.title,
            description: task.description
        }
    };
}

//obtener todas las tareas
const getAllTasks = async()=>{
    const tasks = await getTasks();
    return{
        message:"Tareas obtenidas exitosamente",
        tasks: tasks.map(task => ({
            id: task.id,
            title: task.title,
            description: task.description
        }))
    };
}

module.exports = {
    createNewTask,
    getAllTasks
}
