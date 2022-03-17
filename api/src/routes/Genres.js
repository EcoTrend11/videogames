const { Genre } = require('../db')

const getGenres = async (req, res) =>{
    try{
        let findGenres =  await Genre.findAll()
        res.status(200).send( findGenres )
    }
    catch(error){
        res.status(404).send(error)
    }

}

module.exports = {getGenres}