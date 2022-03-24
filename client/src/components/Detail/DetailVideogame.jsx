import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getVideogameDetail } from "../../store/action"
import Loading from "../Loading/Loading"
import style from "./DetailVideogame.module.css"
import Title from "../Title/Title"

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
        <div className={style.container}>
            <Title/>
            <div className={style.imgContainer}>
                <img className={style.img} src={detail.background_image} alt="img not found"/>
            </div>
            <div className={style.containerDetail}>
                <h2 className={style.title} >{detail.name}</h2>
                <h4 className={style.subtitle}>Genres:</h4>
                <ul className={style.text}>
                    {detail.genres.map( (e) => 
                        <li key={e.id}>{e.name}</li>)}
                </ul>
                <h4 className={style.subtitle}>Description:</h4>
                <ul className={style.text}>
                    <li>{texto}</li>
                </ul>
                <h4 className={style.subtitle}>released: </h4>
                <ul className={style.text}>
                    <li>{detail.released}</li>
                </ul>
                <h4 className={style.subtitle}>rating:</h4>
                <ul className={style.text}>
                    <li>{detail.rating}</li>
                </ul>
                <h4 className={style.subtitle}>
                    platforms:
                </h4>
                <ul className={style.text}>
                    {detail.platforms.map( e => 
                        <li key={e.platform.id}>{e.platform.name}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default DetailVideogame