const {createNewTask, getAllTasks} = require('../services/task.service')

//Crear tarea
const createTask = async(req, res)=>{
    try{
        const {title, description}= req.body;
        const result = await createNewTask(title, description);
        res.status(201).json(result);
    } catch(error){
        res.status(400).json({message: error.message});
    }
}

//Obtener todas las tareas
const getTasks = async(req, res)=>{
    try{
        const result = await getAllTasks();
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    createTask,
    getTasks
}