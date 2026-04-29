const { insertUser, findUserById, findUserByEmail } = require('../models/user.model');
const { generarToken } = require('../config/jwt');
const bcrypt = require('bcryptjs');

//Registrar usuario

const registerUser = async(name, email , password)=>{
    const existingUser = await findUserByEmail(email);
        if(existingUser){
            throw new Error('El correo ya está registrado');
        }

    const hashPassword = await bcrypt.hash(password,10)
    const user = await insertUser(name, email, hashPassword);
    return { 
        message:"Usuario registrado exitosamente",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    };
}

// login de usuario
const loginUser = async(email,password)=>{
    const user = await findUserByEmail(email);
    if(!user){
        throw new Error('Correo o contraseña incorrectos');
    }
    const isPasswordValid = await bcrypt.compare(password, user.hash_password);
    if(!isPasswordValid){
        throw new Error('Correo o contraseña incorrectos');
    }
    const token = generarToken(user);
    return{
        message:"Login exitoso",
        user:{
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }

    }
}
//Obtener mi perfil 
const getProfile = async(userId)=>{
    const user = await findUserById(userId);
    if(!user){
        throw new Error('Usuario no encontrado');
    }
    return{
        message:"Perfil obtenido exitosamente",
        user:{
            id: user.id,
            name: user.name,
            email: user.email
        }
    }
}

module.exports = {
    registerUser,
    loginUser,
    getProfile
}
