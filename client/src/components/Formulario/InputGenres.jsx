import axios from "axios"
import { useEffect, useState } from "react"

const InputGenres = ({setFormulario , formulario}) =>{

    const [value,setValue] =useState([])
    
    const getGenres = async () =>{
        let getApi = (await axios.get("http://localhost:3001/genres")).data
        setValue(getApi)
    }

    useEffect(function(){
        getGenres()
    },[])

    function onChange (e){
        let isChecked = e.target.checked
        let value = e.target.value
        if(isChecked){
            setFormulario({
                ...formulario,
                genresId : formulario.genresId.concat(value)
            })
        }
        else{
            setFormulario({
                ...formulario,
                genresId : formulario.genresId.filter( e => e !== value)
            })
        }
    }

    return(
        <div>
            <label>Genres : </label>
            <ul>
            {value.map((e) => (
                    <li key={e.id}>
                        <input type="checkbox" value={e.id} onChange={onChange} id={e.id}></input>
                        <label htmlFor={e.id}>{e.name}</label>
                    </li>
            ) )}
            </ul>
        </div>
    )
}

export default InputGenres