import { useState } from "react"
import Button from "./Button"
import InputDate from "./InputDate"
import InputDescription from "./InputDescription"
import InputGenres from "./InputGenres"
import InputName from "./InputName"
import InputPlatforms from "./InputPlatforms"
import InputRating from "./InputRating"



const Formulario = () =>{
    const [formulario , setFormulario] = useState(
        {
            name : "",
            description: "",
            released : "",
            rating : "",
            platforms : [],
            genresId : []
        }
    )
    

    return(
        <div>
            <InputName setFormulario={setFormulario} formulario={formulario}/>
            <InputDescription setFormulario={setFormulario} formulario={formulario}/>
            <InputDate setFormulario={setFormulario} formulario={formulario}/>
            <InputRating setFormulario={setFormulario} formulario={formulario}/>
            <InputGenres setFormulario={setFormulario} formulario={formulario}/>
            <InputPlatforms setFormulario={setFormulario} formulario={formulario}/>
            <Button formulario={formulario}/>
        </div>
    )
}

export default Formulario