import axios from "axios";
import { useEffect, useState } from "react";
import env from "react-dotenv";
import style from "./InputPlatform.module.css"

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
        let id = e.target.value
        if(isChecked){
            setFormulario({
                ...formulario,
                platforms : formulario.platforms.concat(id)
            })
        }
        else{
            setFormulario({
                ...formulario,
                platforms : formulario.platforms.filter( e => e !== id)
            })
        }
    }

    return(
        <div className={style.container}>
            <div className={style.containerInput}>
                <label className={style.label}>Platforms : </label>
                <ul className={style.ul}>
                {platform.map((e) => (
                    <div key={e.id} className={style.containerLi}> 
                        <li key={e.id}>
                            <input type="checkbox" value={e.id} onChange={onChange} id={e.id}></input>
                            <label htmlFor={e.id}>{e.name}</label>
                        </li>
                    </div>
                ) )}
                </ul>
            </div>
        </div>
    )
}

export default InputPlatforms