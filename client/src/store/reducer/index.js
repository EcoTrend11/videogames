import { CLEAR, FILTER_BY_ABC, FILTER_BY_GENRE, FILTER_BY_ORIGIN, FILTER_BY_RATING, GET_DETAIL, GET_VIDEOGAMES, GET_VIDEOGAMES_NAME } from "../action/constants"

const initialState = {
    videogames : [],
    OrVideogames: [],
    detailVideogame: []
}

function reducer ( state = initialState , action ) {
    if( action.type === CLEAR){
        return {
            ...state,
            detailVideogame : undefined
        }
    }
    if( action.type === GET_VIDEOGAMES ) {
        return {
            ...state,
            videogames : action.payload,
            OrVideogames: action.payload
        }
    }
    if ( action.type === GET_DETAIL){
        return {
            ...state,
            detailVideogame : action.payload
        }
    }
    if (action.type === GET_VIDEOGAMES_NAME){
        return{
            ...state,
            OrVideogames : action.payload
        }
    }
    if (action.type === FILTER_BY_GENRE){
        let key = action.payload.key;
        let value = action.payload.value;

        if(value === ""){
            return{
                ...state,
                OrVideogames : state.OrVideogames
            }
        }
        
        let newFilter = [...state.videogames]
        let readyFilter = newFilter.filter( e => e[key].find(e => e.name === value))

        return{
            ...state,
            OrVideogames : readyFilter
        }
    }
    if(action.type === FILTER_BY_ORIGIN){
        let value = action.payload
        if(value === "database"){
            let newFilter = [ ...state.videogames]
            let readyFilter = newFilter.filter(e => e.id.length === 36)
            return{
                ...state,
                OrVideogames : readyFilter
            }
        }
        if(value === "api"){
            let newFilter = [ ...state.videogames]
            let readyFilter = newFilter.filter( e => e.id.length !== 36)
            return{
                ...state,
                OrVideogames : readyFilter
            }
        }else{
            return{
                ...state,
                OrVideogames : state.OrVideogames
            }
        }
    }
    if(action.type === FILTER_BY_ABC){
        let value = action.payload
        let newFilter = [ ...state.videogames]
        if(value === "mayor"){
            console.log("entre a mayor")
            
            let readyFilter = newFilter.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });

            
            return{
                ...state,
                OrVideogames : readyFilter
            }
        }
        if(value === "menor"){
            console.log("entre a menor")

            let readyFilter = newFilter.sort(function (a, b) {
                let valorA = a.name.toUpperCase()
                let valorB = b.name.toUpperCase()
                if (valorA < valorB) {
                  return 1;
                }
                if (valorA > valorB) {
                  return -1;
                }
                return 0;
              });
            
            return{
                ...state,
                OrVideogames : readyFilter
            }
        }else{
            return{
                ...state,
                OrVideogames : state.OrVideogames
            }
        }
    }
    if(action.type === FILTER_BY_RATING){
        let value = action.payload
        let newFilter = [ ...state.videogames]
        if(value === "mayor"){
            function comparar ( a, b ){
                let valueA = a.rating;
                let valueB = b.rating;
                return( valueB - valueA)
            }
            let readyFilter = newFilter.sort(comparar)
            return{
                ...state,
                OrVideogames : readyFilter
            }
        }
        if(value === "menor"){
            function comparar ( a, b ){
                let valueA = a.rating;
                let valueB = b.rating;
                return( valueA - valueB)
            }
            let readyFilter = newFilter.sort(comparar)
            return{
                ...state,
                OrVideogames : readyFilter
            }
        }else{
            return{
                ...state,
                OrVideogames : state.OrVideogames
            }
        }
    }
    return{
        state
    }
}


export default reducer