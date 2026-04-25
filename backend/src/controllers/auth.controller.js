const {registerUser, loginUser} = require('../services/auth.service');

//Registrar usuario
const register = async(req , res) =>{
    try{
        const {name, email , password} = req.body;
        const result = await registerUser(name, email , password);
        res.status(201).json(result);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    register
}