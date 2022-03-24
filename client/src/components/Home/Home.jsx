import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getVideogames } from "../../store/action"
import Loading from "../Loading/Loading"

import Button from "./Button"
import CardContainer from "./CardContainer"
import FilterContainer from "./FilterContainer"
import Pagination from "./Pagination"
import SearchBar from "./SearchBar"

const Home = () =>{


    const [currentPage, setCurrentpage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(15)
    const paginate = (pageNumber) => setCurrentpage(pageNumber);

    const videogames = useSelector(function(state){
        return state.OrVideogames
    })

    const dispatch = useDispatch()
    useEffect( function (){

        dispatch(getVideogames())
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
                <Button/>
                <Pagination postsPerPage = {postPerPage} totalPosts={videogames.length } paginate={paginate}/>
                <div>
                    <CardContainer videogames={currentPost} postsPerPage = {postPerPage} totalPosts={videogames.length } paginate={paginate}/>
                </div>
                <div>
                    <Pagination postsPerPage = {postPerPage} totalPosts={videogames.length } paginate={paginate}/>
                </div>
            </div>
            
        )
    }
}
export default Home