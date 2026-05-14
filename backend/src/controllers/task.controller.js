const {createNewTask, getTasksFromUser, updateTasksByUserId} = require('../services/task.service')

//Crear tarea
const createTask = async(req, res)=>{
    try{
        const {title, description}= req.body;
        if(!title){
            return res.status(400).json({message: "El título es requerido"});
        }
        const userId = req.user.id;
        const result = await createNewTask(title, description, userId);
        res.status(201).json(result);
    } catch(error){
        res.status(400).json({message: error.message});
    }
}

//Obtener tareas del usuario autenticado
const getTasksUser = async(req,res)=>{
    try{
        const userId = req.user.id;
        const result = await getTasksFromUser(userId);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

const updateTaskByUserId = async(req,res)=>{
    try{
        const userId = req.user.id; //Obtenemos el ID del usuario autenticado
        const {taskId} = req.params;
        const result = await updateTasksByUserId(userId, taskId);
        res.status(200).json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}
module.exports = {
    createTask,
    getTasksUser,
    updateTaskByUserId
}