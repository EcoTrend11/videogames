import { BsArrowReturnLeft } from 'react-icons/bs';
import style from "./Return.module.css"
import {Link} from "react-router-dom";
const Return = () =>{

    return(
        <div className={style.container}>
            <Link  className={style.link} to="/home">
                <BsArrowReturnLeft/>
            </Link>
        </div>
    )
}

export default Return