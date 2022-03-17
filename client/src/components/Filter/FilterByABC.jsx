const FilterByABC = () =>{

    function filterOrderABC (e) {
        let value = e.target.value
        console.log(value)
    }

    return(
        <div>
            <label>Filter by order alphabetical :</label>
            <select onChange={filterOrderABC}>
                <option>-------</option>
                <option value="mayor" >  A - Z  </option>
                <option value="menor" >  Z - A  </option>
            </select>
        </div>
    )
}

export default FilterByABC
