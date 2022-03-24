import { Link } from "react-router-dom"
import style from "./Card.module.css"

const Card = ({e}) =>{
    return(
        <Link className={style.link} to={"/detail/"+ e.id}>
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img  className={style.img} src={e.background_image} alt="img not found"/>
                </div>
                <div>
                    <h2 className={style.tittle}>
                        {e.name}
                    </h2>
                    <div className={style.containerDetail}>
                        <h4>
                            Genres:
                        </h4>
                        <ul>
                            {e.genres.map( p =>
                                <li className={style.li} key={p.id}>{p.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card