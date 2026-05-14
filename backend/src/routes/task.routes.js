const express = require('express');
const router = express.Router();
const {createTask, getTasksUser, updateTaskByUserId} = require('../controllers/task.controller');
const {verificarToken} = require('../middlewares/auth.middleware');

router.use(verificarToken); // Aplicar el middleware de autenticación a todas las rutas

//Rutas de tareas

//Crear tarea
router.post('/create', createTask);

//Obtener tareas del usuario autenticado
router.get('/mine', getTasksUser);

//Actualizar tarea por usuario
router.put('/mine/:taskId', updateTaskByUserId);

module.exports = router;