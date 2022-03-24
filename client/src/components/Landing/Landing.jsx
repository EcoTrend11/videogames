import style from "./Landing.module.css"
import {Link} from "react-router-dom";
import character from "../../img/SeekPng.com_video-game-character-png_942345.png"

const Landing = () =>{
    return(
            <div className={style.container}>
                <h1 className={style.tittle}>Videogames Project</h1>
                <div>
                    <Link className={style.link} to="/home">
                        <div className={style.go}>GO !!!</div>
                    </Link>
                </div>
                <div>
                    <img className={style.img} src={character} alt="img not found"/>
                </div>
        </div>
    )
}

export default Landing