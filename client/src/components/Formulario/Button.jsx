import axios from "axios"

const Button = ({formulario}) => {
    async function onClick (e){
        e.preventDefault()
        let post = (await axios.post("http://localhost:3001/create",formulario)).data
        alert(post.create)
    }

    return(
        <div>
            <button onClick={onClick}>click me</button>
        </div>
    )
}

export default Button