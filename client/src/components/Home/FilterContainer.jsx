import FilterByABC from "../Filter/FilterByABC"
import FilterByGenre from "../Filter/FilterByGenre"
import FilterByOrigin from "../Filter/FilterByOrigin"
import FilterByRating from "../Filter/FilterByRating"
import style from "./FilterContainer.module.css"

const FilterContainer = () =>{
    return(
        <div className={style.container}>
            <FilterByGenre/>
            <FilterByOrigin/>
            <FilterByABC/>
            <FilterByRating/>
        </div>
    )
}

export default FilterContainer