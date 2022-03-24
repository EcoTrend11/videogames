import Card from "./Card"
import style from "./CardContainer.module.css"
const CardContainer = ({videogames}) =>{

    
    return(
        <div className={style.container}>
            <div className={style.containerCards}>
                {videogames.map(e => 
                    <Card e={e} key={e.id}/>)}
            </div>
        </div>
    )
}

export default CardContainer