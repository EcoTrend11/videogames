const axios = require('axios');
const { Genre ,  Videogame, Platform } = require ('../db.js');
const { Op } = require("sequelize");
require('dotenv').config();
const {
    KEY,
  } = process.env;


const getAllVideogames = async(req, res) =>{
    //por preformace enviaremos solo 100
    try{
        let api1 = (await axios.get(`https://api.rawg.io/api/games?key=${KEY}&page=1&page_size=40`)).data.results;
        let api2 = (await axios.get(`https://api.rawg.io/api/games?key=${KEY}&page=2&page_size=40`)).data.results;
        let api3 = (await axios.get(`https://api.rawg.io/api/games?key=${KEY}&page=3&page_size=40`)).data.results;
        const database = await Videogame.findAll({
            include : Genre
        })

        let result = [...database,...api1, ...api2 ,...api3]
        // let hash = {};
        // let newresult = result.filter(o => hash[o.id] ? false : hash[o.id] = true);
        // res.status(200).send(newresult)

        res.status(200).send(result)
    }
    catch(err){
        res.status(404).send(err)
    }
}

const getVideogamesName = async (req , res) =>{
    let query = req.query.name
    //enviamos solo 15
    try{
        let api = ( await axios.get(`https://api.rawg.io/api/games?key=${KEY}&search={${query}}&page_size=15`)).data.results
        const database = await Videogame.findAll({
            where : {
              name : {
                [Op.iLike] : '%'+query+'%'
              }
            }
          })

        let data = [...database, ...api]
        res.status(200).send(data)
    }catch(err){
        res.status(404).send(err)
    }
}

const getVideogamesId = async (req , res) =>{
    let params = req.params.id
    console.log(params.length)
    
    try{
        if(params.length === 36){
            const database = await Videogame.findByPk(params,{
                include : [ Platform, Genre ]
              });
            res.status(200).send(database)
        }else{
            let api = (await axios.get(`https://api.rawg.io/api/games/${params}?key=${KEY}`)).data
            res.status(200).send(api)
        }
    }catch(err){
        res.status(404).send(err)
    }
}

const createVidegame = async (req,res) =>{
    try{
    const imgDefault= "https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1622821236/itpro/Laptop_showing_the_Postgres_logo_SHUTTERSTOCK.jpg"
    const { name , description , released , rating , genresId,platforms } = req.body
        const createVidegame = await Videogame.create({
            name : name,
            description : description,
            released : released,
            rating : rating,
            background_image: imgDefault,
        })
            createVidegame.addGenres(genresId);
            createVidegame.addPlatforms(platforms)


            res.status(200).send({create : "successfully created",
                                    info: createVidegame
                                })
    }
    catch(error){
        res.status(404).send({create : "error",
                                info: error
                })
        console.log(error)
    }
}

const getBase = async (req , res) =>{
    try{
        let database = await Videogame.findAll({
            include : Genre
        })
        res.status(200).send(database)
    }
    catch(err){
        console.log(err)
    }
}



module.exports = {getAllVideogames , getVideogamesName, getVideogamesId, createVidegame, getBase}