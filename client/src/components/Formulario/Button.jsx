import axios from "axios"
import style from "./Button.module.css"

const Button = ({formulario}) => {


    async function onClick (e){
        e.preventDefault()
        let post = (await axios.post("http://localhost:3001/create",formulario)).data
        console.log(post)
        if(post.isCreate === true){
            alert(post.mensage)
        }
        else{
            alert("error to create")
        }
    }

    return(
        <div className={style.container}>
            <button className={style.button} onClick={onClick} >CREATE</button>
        </div>
    )
}

export default Button