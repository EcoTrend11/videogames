import { FILTER_BY_ABC, FILTER_BY_GENRE, FILTER_BY_ORIGIN, FILTER_BY_RATING, GET_DETAIL, GET_VIDEOGAMES, GET_VIDEOGAMES_NAME } from './constants'

export function getVideogames () {
    return function ( dispatch ){
        return fetch ("http://localhost:3001/videogames")
        .then( ( response ) => {
            console.log("1")
            return response.json()
        })
        .then( ( json ) =>{
            console.log("entre  a json")
            dispatch( {
                type : GET_VIDEOGAMES,
                payload : json
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

export function getVideogameDetail (id){
    return function ( dispatch ){
        return fetch ("http://localhost:3001/videogame/"+id)
        .then( (response) =>{
            return response.json()
        })
        .then ( (json) =>{
            dispatch({
                type : GET_DETAIL,
                payload : json
            })
        })
        .catch( (err) =>{
            console.log(err)
        })
    }
}

export function getVideogamesName (value){
    return function(dispatch){
        return fetch("http://localhost:3001/videogames/name?name="+value)
        .then( (response) => {
            return response.json()
        })
        .then( (json) =>{
            dispatch({
                type : GET_VIDEOGAMES_NAME,
                payload : json
            })
        })
    }
}

export function filterGenre ( key , value){
    return{
        type: FILTER_BY_GENRE,
        payload : {
            key,
            value
        }
    }
}


export function filterOrigin ( value ){
    return{
        type:FILTER_BY_ORIGIN,
        payload : value
    }
}

export function filterOrderABC ( value ){
    return{
        type: FILTER_BY_ABC,
        payload : value
    }
}

export function filterRating( value ){
    return{
        type: FILTER_BY_RATING,
        payload : value
    }
}