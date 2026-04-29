const express = require('express');
const router = express.Router();
const {register, login, getUserProfile } = require('../controllers/auth.controller');
const {verificarToken} = require('../middlewares/auth.middleware');

router.post('/register', register);

router.post('/login', login);

router.get('/profile', verificarToken, getUserProfile);

module.exports = router;