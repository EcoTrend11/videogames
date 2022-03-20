import FilterByABC from "../Filter/FilterByABC"
import FilterByGenre from "../Filter/FilterByGenre"
import FilterByOrigin from "../Filter/FilterByOrigin"
import FilterByRating from "../Filter/FilterByRating"

const FilterContainer = () =>{
    return(
        <div>
                <FilterByGenre/>
                <FilterByOrigin/>
                <FilterByABC/>
                <FilterByRating/>
        </div>
    )
}

export default FilterContainer