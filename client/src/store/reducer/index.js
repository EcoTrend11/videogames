import { FILTER_BY_GENRE, FILTER_BY_ORIGIN, GET_DETAIL, GET_VIDEOGAMES, GET_VIDEOGAMES_NAME } from "../action/constants"

const initialState = {
    videogames : [],
    OrVideogames: [],
    detailVideogame: []
}

function reducer ( state = initialState , action ) {
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

        console.log(key)
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
        }
    }
    return{
        state
    }
}


export default reducer