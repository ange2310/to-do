const express = require('express');
const router = express.Router();
const {createTask, getTasks} = require('../controllers/task.controller');
const {verificarToken} = require('../middlewares/auth.middleware');

const authMiddleware = verificarToken;

router.use(authMiddleware); // Aplicar el middleware de autenticación a todas las rutas

//Rutas de tareas

//Crear tarea
router.post('/create', createTask);

//Obtener todas las tareas
router.get('/all', getTasks);

module.exports = router;