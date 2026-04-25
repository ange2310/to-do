const { insertUser } = require('../models/user.model');
const { findUserByEmail } = require('../models/user.model');
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

module.exports = {
    registerUser
}