const jwt = require('jsonwebtoken');
require('dotenv').config();

const verificarToken = (req, res, next) =>{
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if(!authHeader){
        return res.status(401).json({error: "Acceso no autorizado"});
    }

    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : authHeader.trim();
    if(!token){
        return res.status(401).json({error: "Acceso no autorizado"});
    }

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified; // Agregar información del usuario al objeto de solicitud
        next(); // Continuar con la siguiente función de middleware o ruta
    } catch(error){
        res.status(401).json({ error: "Token no válido" });
    }
}

module.exports = {
    verificarToken
}