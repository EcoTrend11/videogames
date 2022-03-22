const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  {getAllVideogames, getVideogamesName, getVideogamesId, createVidegame, getBase } = require ('./VideoGames.js')
const { getGenres } = require ('./Genres.js');
const { getPlatforms } = require('./Platforms.js');
const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getAllVideogames);
router.get('/videogames/name', getVideogamesName);
router.get('/videogame/:id' , getVideogamesId)
router.get('/genres' , getGenres)
router.post('/create', createVidegame )
router.get('/base' ,getBase)
router.get('/platform' , getPlatforms)


module.exports = router;
