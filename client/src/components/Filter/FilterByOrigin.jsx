import { useDispatch } from "react-redux"
import { filterOrigin } from "../../store/action"

const FilterByOrigin = () => {

    const dispatch = useDispatch()
    function FilterOrigin (e) {
        let value = e.target.value 
        dispatch(filterOrigin(value))
    }

    return(
        <div>
            <label> Filter by origin :  </label>
            <select onChange={FilterOrigin}>
                <option value="">{"<"}--SELECT--{">"}</option>
                <option value="api" >API</option>
                <option value="database" >DATABASE</option>
            </select>
        </div>
    )
}

export default FilterByOrigin