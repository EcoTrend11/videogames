import { useState } from "react"
import style from "./InputRating.module.css"

const InputRating = ({setFormulario , formulario}) =>{
    const [value ,setValue] =useState(2.5)
    function onChange (e){
        let value = e.target.value
        setValue(value)
        setFormulario({
            ...formulario,
            rating : value
        })
    }

    return(
        <div className={style.container}>
            <div className={style.containerInput}>
                <label className={style.label} htmlFor="rating"> Rating : </label>
                <input className={style.input} type="range" name="rating" min="0" max="5" step="0.1" value={value} onChange={onChange}/>
                <div className={style.value}>{value}</div>
            </div>
        </div>
    )
}

export default InputRating