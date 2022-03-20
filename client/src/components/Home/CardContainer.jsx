import Loading from "../Loading/Loading"
import Card from "./Card"
const CardContainer = ({videogames}) =>{

    
    return(
        <div>
            {videogames.map(e => 
                <Card e={e} key={e.id}/>)}
        </div>
    )
}

export default CardContainer