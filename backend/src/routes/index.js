const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const taskRoutes = require('./task.routes');

//Rutas de autenticación
router.use('/auth', authRoutes);

//Rutas de tareas
router.use('/tasks', taskRoutes);

module.exports = router;