const InputDescription = ({setFormulario , formulario}) =>{

    function onChange (e){
        let value = e.target.value

        setFormulario({
            ...formulario,
            description : value
        })
    }
    return(
        <div>
            <label htmlFor="description">Description : </label>
            <textarea id="description" onChange={onChange}/>
        </div>
    )
}

export default InputDescription