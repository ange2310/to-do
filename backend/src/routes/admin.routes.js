const express = require('express');
const router = express.Router();
const {getAdminStats} = require('../controllers/admin.controller');
const {isAdmin} = require('../middlewares/admin.middleware');
const {verificarToken} = require('../middlewares/auth.middleware');

router.use(verificarToken); // Aplicar el middleware de autenticación a todas las rutas
router.use(isAdmin); // Aplicar el middleware de verificación de administrador a todas las rutas

//ruta estadisticas
router.get('/stats', getAdminStats)

module.exports = router;