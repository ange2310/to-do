
const isAdmin = (req, res, next) => {

    if(!req.user){
        return res.status(401).json({
            error:"Usuario no autenticado"
        })
    }
    if(req.user.role === 'admin'){
        next(); // El usuario es admin, continuar con la siguiente función de middleware o ruta
    }else{
        return res.status(403).json({
            error:"Acceso denegado: se requiere rol de administrador"
        })
    }
}
module.exports = {
    isAdmin
}