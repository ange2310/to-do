const {getStats} = require('../services/admin.service');

const getAdminStats = async (req, res) => {
    try{
        const result = await getStats();
        res.status(200).json(result);
    } catch(error){
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getAdminStats
}