import { useEffect, useState } from "react"
import Loading from "../Loading/Loading"
import Button from "./Button"
import InputDate from "./InputDate"
import InputDescription from "./InputDescription"
import InputGenres from "./InputGenres"
import InputName from "./InputName"
import InputPlatforms from "./InputPlatforms"
import InputRating from "./InputRating"
import style from "./Formulario.module.css"
import Return from "./Return"



const Formulario = () =>{
    const [loading, setLoading] = useState(true)
    let initialState= {
        name : null,
        description: null,
        released : null,
        rating : "2.5",
        platforms : [],
        genresId : []
    }

    const [formulario , setFormulario] = useState(initialState)

    useEffect(function(){
        setLoading(false)
    },[])



    if(loading){return <Loading/>}    
    return(
        <div className={style.container}>
            <Return/>
            <InputName setFormulario={setFormulario} formulario={formulario}/>
            <InputDescription setFormulario={setFormulario} formulario={formulario}/>
            <InputDate setFormulario={setFormulario} formulario={formulario}/>
            <InputRating setFormulario={setFormulario} formulario={formulario}/>
            <InputGenres setFormulario={setFormulario} formulario={formulario}/>
            <InputPlatforms setFormulario={setFormulario} formulario={formulario}/>
            <Button formulario={formulario} />
        </div>
    )
}

export default Formulario