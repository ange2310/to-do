const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const taskRoutes = require('./task.routes');
const adminRoutes = require('./admin.routes');

//Rutas de autenticación
router.use('/auth', authRoutes);

//Rutas de tareas
router.use('/tasks', taskRoutes);

//Rutas de administración
router.use('/admin', adminRoutes);

module.exports = router;