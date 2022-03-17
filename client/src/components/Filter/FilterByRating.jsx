import { useDispatch } from "react-redux"
import { filterRating } from "../../store/action"

const FilterByRating = () =>{
    const dispatch = useDispatch()

    function filterOrderRating(e){
        let value = e.target.value
        dispatch(filterRating(value))
    }
    return (
        <div>
            <label> Filter by rating :  </label>
            <select onChange={filterOrderRating}>
                <option>-------</option>
                <option value="mayor" >Highest rating</option>
                <option value="menor" >Lowest rating</option>
            </select>
        </div>
    )
}

export default FilterByRating