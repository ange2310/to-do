const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');

//Rutas de autenticación
router.use('/auth', authRoutes);
module.exports = router;