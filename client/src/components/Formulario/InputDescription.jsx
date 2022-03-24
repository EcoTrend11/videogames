import style from "./InputDescription.module.css"
const InputDescription = ({setFormulario , formulario}) =>{

    function onChange (e){
        let value = e.target.value

        setFormulario({
            ...formulario,
            description : value
        })
    }
    return(
        <div className={style.container}>
            <div className={style.containerInput}>
                <label className={style.label} htmlFor="description">Description : </label>
                <textarea className={style.textarea} id="description" onChange={onChange}/>
            </div>
        </div>
    )
}

export default InputDescription