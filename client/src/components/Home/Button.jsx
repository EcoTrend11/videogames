import {Link} from "react-router-dom";
import { GrAdd } from 'react-icons/gr';
import style from "./Button.module.css"
const Button = () =>{
     return(
         <Link  className={style.link} to="/create">
            <div className={style.title}>Create</div>
         </Link>
     )
}

export default Button