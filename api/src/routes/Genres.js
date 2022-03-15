const { Genres } = require('../db')

const getGenres = async (req, res) =>{
    try{
        let findGenres =  await Genres.findAll()
        res.status(200).send( findGenres )
    }
    catch(error){
        res.status(404).send(erro)
    }

}

module.exports = {getGenres}