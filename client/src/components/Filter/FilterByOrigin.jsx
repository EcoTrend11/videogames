import { useDispatch } from "react-redux"
import { filterOrigin } from "../../store/action"
import style from "./FilterByOrigin.module.css"

const FilterByOrigin = () => {

    const dispatch = useDispatch()
    function FilterOrigin (e) {
        let value = e.target.value 
        dispatch(filterOrigin(value))
    }

    return(
        <div className={style.container}>
            <label className={style.title}> Filter by origin :  </label>
            <select className={style.select} onChange={FilterOrigin}>
                <option className={style.option} value="">{"<"}--SELECT--{">"}</option>
                <option className={style.option} value="api" >API</option>
                <option className={style.option} value="database" >DATABASE</option>
            </select>
        </div>
    )
}

export default FilterByOrigin