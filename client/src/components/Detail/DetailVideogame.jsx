import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getVideogameDetail } from "../../store/action"
import Loading from "../Loading/Loading"

const DetailVideogame = () =>{
    const {videogameId} = useParams()
    const dispatch = useDispatch()
    const detail = useSelector(function(state){
        return state.detailVideogame
    })

    useEffect(()=>{
        dispatch(getVideogameDetail(videogameId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    //delete html tag
    let texto = ""
    if(detail){
         texto = detail.description.replace(/<[^>]*>?/g, '')
    }



    if(!detail){
        return(
            <Loading/>
        )
    }

    return(
        <div>
            <div>
                <img src={detail.background_image} alt="img not found"/>
            </div>
            <div>
                <h2>{detail.name}</h2>
                <h4>Genres:</h4>
                <ul>
                    {detail.genres.map( (e) => 
                        <li key={e.id}>{e.name}</li>)}
                </ul>
                <p>
                    {texto}
                </p>
                <h4>
                    released:<p>{detail.released}</p>
                </h4>
                <h4>
                    rating:<p>{detail.rating}</p>
                </h4>
            </div>
        </div>
    )
}

export default DetailVideogame