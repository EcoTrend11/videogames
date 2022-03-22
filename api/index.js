const server = require('./src/app.js');
const { conn , Genre , Platform } = require('./src/db.js');
const axios = require('axios');
const { application } = require('express');
require('dotenv').config();
const {
    KEY,
  } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => { 
  server.listen(3001, async () => {

    let genres = await Genre.findAll()
    let platforms = await Platform.findAll()
    if(genres.length === 0){
      let api = (await axios.get(`https://api.rawg.io/api/genres?key=${KEY}`)).data.results
      api.forEach( async (e) =>{
        try{
          const createGenres = await Genre.create({
            id : e.id,
            name : e.name,
          })
          
        }
        catch(err){
          console.log(err)
        }
      })
      console.log("se creo database de genres")     
    }  
    if(platforms.length === 0 ){
      let api1 = (await axios.get("https://api.rawg.io/api/platforms?key=f5b380f496ef40e29a1b66b92286b8da&page=1")).data.results;
      let api2 = (await axios.get("https://api.rawg.io/api/platforms?key=f5b380f496ef40e29a1b66b92286b8da&page=2")).data.results;
      let allApis = [...api1 , ... api2]
      allApis.forEach( async (e) =>{
        try{
          const createPlatforms = await Platform.create({
            id: e.id,
            platform :{
              id : e.id,
              name : e.name
            }

          })
        }
        catch(err){
          console.log(err)
        }
      }) 
      console.log("se creo database plaforms ")
    }  
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
