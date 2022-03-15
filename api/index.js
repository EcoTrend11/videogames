const server = require('./src/app.js');
const { conn , Genre } = require('./src/db.js');
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
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
