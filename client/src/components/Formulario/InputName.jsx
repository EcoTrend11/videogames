import style from "./InputName.module.css"
const InputName = ({setFormulario , formulario}) =>{
    function onChange (e){
        let value = e.target.value

        setFormulario({
            ...formulario,
            name : value
        })
    }
    return(
        <div className={style.container}>
            <div className={style.containerInput}>
                <label className={style.label} htmlFor="name">Name : </label>
                <input className={style.input}  type="text" id="name" onChange={onChange} />
            </div>
        </div>
    )
}

export default InputName