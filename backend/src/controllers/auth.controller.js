const {registerUser, loginUser, getProfile} = require('../services/auth.service');

//Registrar usuario
const register = async(req , res) =>{
    try{
        const {name, email , password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message: "Nombre, email y contraseña son requeridos"});
        }
        const result = await registerUser(name, email , password);
        res.status(201).json(result);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}

const login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message: "Email y contraseña son requeridos"});
        }
        const result = await loginUser(email,password);
        res.status(200).json(result);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}

//Obtener mi perfil
const getUserProfile = async(req,res)=>{
    try{
        const userId = req.user.id; //Obtenemos el ID del usuario autenticado
        const result = await getProfile(userId);
        res.status(200).json(result);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    register,
    login,
    getUserProfile
}
