import { useState } from "react"

const InputRating = ({setFormulario , formulario}) =>{
    const [value ,setValue] =useState()
    function onChange (e){
        let value = e.target.value
        setValue(value)
        setFormulario({
            ...formulario,
            rating : value
        })
    }

    return(
        <div>
            <label htmlFor="rating"> Rating : </label>
            <input type="range" name="rating" min="0" max="5" step="0.1" onChange={onChange}/>
            <div>{value}</div>

        </div>
    )
}

export default InputRating