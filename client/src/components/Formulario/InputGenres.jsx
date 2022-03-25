import axios from "axios"
import { useEffect, useState } from "react"
import style from "./InputGenres.module.css"

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
        <div className={style.container}>
            <div className={style.containerInput}>
                <label className={style.label}>Genres : </label>
                <div className={style.containerUl}>
                    <ul className={style.ul}>
                    {value.map((e) => (
                        <div key={e.id} className={style.containerLi}>
                            <li className={style.li} key={e.id}>
                                <input className={style.input} type="checkbox" value={e.id} onChange={onChange} id={e.id}></input>
                                <label htmlFor={e.id}>{e.name}</label>
                            </li>
                        </div>
                    ) )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InputGenres