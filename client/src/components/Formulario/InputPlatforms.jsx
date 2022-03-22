import axios from "axios";
import { useEffect, useState } from "react";
import env from "react-dotenv";

const InputPlatforms = ({setFormulario , formulario}) =>{

    const [platform,setPlatform] =useState([])
    
    const getGenres = async () =>{
        let getApi1 = (await axios.get(`https://api.rawg.io/api/platforms?key=${env.API_URL}`)).data.results
        let getApi2 = (await axios.get(`https://api.rawg.io/api/platforms?key=${env.API_URL}&page=2`)).data.results
        // obteniedo todas las plataformas
        setPlatform([...getApi1,...getApi2])
    }

    useEffect(function(){
        getGenres()
    },[])

    function onChange (e){
        let isChecked = e.target.checked
        let value = e.target.value
        let id = e.target.id

        let valueToConcat = {
            name : value,
            id : id
        }


        if(isChecked){
            setFormulario({
                ...formulario,
                platforms : formulario.platforms.concat(valueToConcat)
             })
        }
        else{
            setFormulario({
                ...formulario,
                platforms : formulario.platforms.filter(e => e.id !== id)
            })
        }
    }

    return(
        <div>
            <label>Platforms : </label>
            <ul>
            {platform.map((e) => (
                    <li key={e.id}>
                        <input type="checkbox" value={e.name} onChange={onChange} id={e.id}></input>
                        <label htmlFor={e.id}>{e.name}</label>
                    </li>
            ) )}
            </ul>
        </div>
    )
}

export default InputPlatforms