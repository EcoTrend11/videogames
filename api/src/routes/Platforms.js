const { Platform } = require('../db')

const getPlatforms = async (req, res) =>{
    try{
        let findPlatforms =  await Platform.findAll()
        res.status(200).send( findPlatforms )
    }
    catch(error){
        res.status(404).send(error)
    }

}

module.exports = {getPlatforms}