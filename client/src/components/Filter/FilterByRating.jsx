import { useDispatch } from "react-redux"
import { filterRating } from "../../store/action"
import style from "./FilterByRating.module.css"

const FilterByRating = () =>{
    const dispatch = useDispatch()

    function filterOrderRating(e){
        let value = e.target.value
        dispatch(filterRating(value))
    }
    return (
        <div className={style.container}>
            <label className={style.title}> Filter by rating :  </label>
            <select className={style.select} onChange={filterOrderRating}>
                <option className={style.option}>{"<"}--SELECT--{">"}</option>
                <option className={style.option} value="mayor" >Highest rating</option>
                <option className={style.option} value="menor" >Lowest rating</option>
            </select>
        </div>
    )
}

export default FilterByRating