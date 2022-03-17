import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getVideogames } from "../../store/action"
import FilterByABC from "../Filter/FilterByABC"
import FilterByGenre from "../Filter/FilterByGenre"
import FilterByOrigin from "../Filter/FilterByOrigin"
import FilterByRating from "../Filter/FilterByRating"
import Loading from "../Loading/Loading"
import CardContainer from "./CardContainer"
import SearchBar from "./SearchBar"

const Home = () =>{
  
    const [ loading , setLoading ] = useState(true)
    const countries = useSelector(function(state){
        return state.OrVideogames
    })

    const dispatch = useDispatch()
    useEffect( function (){
        setLoading(true)
        dispatch(getVideogames())
        setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(countries)
    if(loading){
        return (
            <Loading/>
        )
    }
    else{
        return(
            <div>
                <SearchBar/>
                <FilterByGenre/>
                <FilterByOrigin/>
                <FilterByABC/>
                <FilterByRating/>
                estas en home
                <div>
                    <CardContainer countries={countries}/>
                </div>
            </div>
            
        )
    }
}
export default Home