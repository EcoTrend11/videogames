import style from "./InputDate.module.css"
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
        <div className={style.container}>
            <div className={style.containerInput}>
                <label className={style.label} htmlFor="start">Released : </label>
                <input className={style.input} type="date" id="start" name="trip-start"
                    max={actualtime} onChange={onChange}/>
            </div>
        </div>
    )
}

export default InputDate