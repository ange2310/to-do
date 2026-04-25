const jwt = require('jsonwebtoken');
require('dotenv').config();

const generarToken = (usuario) => {
    return jwt.sign({
        id: usuario.id,
        email: usuario.email
    }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

module.exports = {
    generarToken
}