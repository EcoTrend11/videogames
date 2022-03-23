import style from "./Loanding.module.css"
import { GiAtom } from 'react-icons/gi';
const Loading = () =>{
    return(
        <div className={style.containerBack}>
            <div className={style.container}>
                <GiAtom className={style.ico}/>
                <h2 className={style.text}>Loading ...</h2>
            </div>
        </div>
    )
}

export default Loading