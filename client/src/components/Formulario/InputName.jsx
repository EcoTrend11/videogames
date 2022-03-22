const InputName = ({setFormulario , formulario}) =>{
    

    function onChange (e){
        let value = e.target.value

        setFormulario({
            ...formulario,
            name : value
        })
    }
    return(
        <div>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" onChange={onChange} />
        </div>
    )
}

export default InputName