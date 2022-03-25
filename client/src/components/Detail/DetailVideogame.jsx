/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { clear, getVideogameDetail } from "../../store/action"
import Return from "../Formulario/Return"
import Loading from "../Loading/Loading"
import style from "./DetailVideogame.module.css"


const DetailVideogame = () =>{
    const {videogameId} = useParams()
    const dispatch = useDispatch()
    // const [detail, setDetail] = useState()

    let detail = useSelector(function(state){
        return state.detailVideogame
    })


    useEffect(()=>{
        dispatch(getVideogameDetail(videogameId))
    },[])
    // useEffect(()=>{
    //     console.log("hize elconsole en el segundo detail" +prueba)
    //     setDetail(prueba)
    // })
    useEffect(()=>{
        return()=>{
            console.log("limpie todo")
            // setDetail()
            dispatch(clear())
        }
    },[])
    
    console.log("soy el console de detail " + detail)
    //delete html tag
    let texto = ""
    if(detail){
         texto = detail.description.replace(/<[^>]*>?/g, '')
    }
    console.log(detail)
    if(!detail){
        return(
            <Loading/>
        )
    }

    return(
        <div className={style.container}>
            <Return/>
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