import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getVideogames } from "../../store/action"
import Loading from "../Loading/Loading"
import CardContainer from "./CardContainer"
import FilterContainer from "./FilterContainer"
import Pagination from "./Pagination"
import SearchBar from "./SearchBar"

const Home = () =>{

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentpage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(15)
    const paginate = (pageNumber) => setCurrentpage(pageNumber);

    const videogames = useSelector(function(state){
        return state.OrVideogames
    })

    const dispatch = useDispatch()
    useEffect( function (){
        setLoading(true)
        dispatch(getVideogames())
        setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let indexOfLastCountry = "";
    let indexOfFirstPost = "";
    let currentPost = "";

    if(videogames){//if beacuse "videogame.slice" can not read undefine
        indexOfLastCountry = currentPage * postPerPage;
        indexOfFirstPost = indexOfLastCountry - postPerPage;
        currentPost = videogames.slice(indexOfFirstPost , indexOfLastCountry)
    }

    if(!videogames){
        return  <Loading/>
    }
    else{
        console.log(currentPost)
        return(
            <div>
                <SearchBar/>
                <FilterContainer/>
                estas en home
                <div>
                    <CardContainer videogames={currentPost}/>
                </div>
                <div>
                    <Pagination postsPerPage = {postPerPage} totalPosts={videogames.length } paginate={paginate}/>
                </div>
            </div>
            
        )
    }
}
export default Home