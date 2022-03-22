const InputDate = ({setFormulario , formulario}) =>{

    let actualtime  = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    //fecha  actual

    function onChange (e){
        let value = e.target.value
        setFormulario({
            ...formulario,
            released : value
        })
    }

    return(
        <div>
            <label htmlFor="start">Released : </label>
            <input type="date" id="start" name="trip-start"
                max={actualtime} onChange={onChange}/>
        </div>
    )
}

export default InputDate