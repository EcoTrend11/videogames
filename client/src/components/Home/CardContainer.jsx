import Loading from "../Loading/Loading"
import Card from "./Card"
const CardContainer = ({countries}) =>{
    

    if(!countries){
        return(
            <Loading/>
        )
    }
    return(
        <div>
            {countries.map(e => 
                <Card e={e} key={e.id}/>)}
        </div>
    )
}

export default CardContainer