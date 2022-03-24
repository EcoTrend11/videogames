import style from "./Title.module.css"
import {Link} from "react-router-dom";
const Title= () =>{
    return(
        <Link  className={style.link} to="/home">
            <div className={style.title}>Videogames</div>
        </Link>
    )
}

export default Title