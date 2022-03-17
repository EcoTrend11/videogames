import { useDispatch } from "react-redux"
import { filterOrderABC } from "../../store/action"

const FilterByABC = () =>{

    const dispatch = useDispatch()
    function filterOrder (e) {
        let value = e.target.value
        dispatch(filterOrderABC(value))
    }

    return(
        <div>
            <label>Filter by order alphabetical :</label>
            <select onChange={filterOrder}>
                <option>-------</option>
                <option value="mayor" >  A - Z  </option>
                <option value="menor" >  Z - A  </option>
            </select>
        </div>
    )
}

export default FilterByABC
