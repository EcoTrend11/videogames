import { useDispatch } from "react-redux"
import { filterOrderABC } from "../../store/action"
import style from "./FilterByABC.module.css"

const FilterByABC = () =>{

    const dispatch = useDispatch()
    function filterOrder (e) {
        let value = e.target.value
        dispatch(filterOrderABC(value))
    }

    return(
        <div className={style.container} >
            <label className={style.title} >Filter by order alphabetical :</label>
            <select  className={style.select} onChange={filterOrder}>
                <option className={style.option} >{"<"}--SELECT--{">"}</option>
                <option className={style.option} value="mayor" >  A - Z  </option>
                <option className={style.option} value="menor" >  Z - A  </option>
            </select>
        </div>
    )
}

export default FilterByABC
