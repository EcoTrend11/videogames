import { useState } from "react"
import { useDispatch } from "react-redux";
import { getVideogamesName } from "../../store/action";
const SearchBar = () =>{

    const dispatch = useDispatch()
    const [name ,setName] = useState("")

    function handleInputChange(e){
        setName(e.target.value);
    }

    function handleInputSubmit(e){
        e.preventDefault();
        if(name){
            dispatch(getVideogamesName(name))
        }
        else{
            return
        }
    }

    console.log(name)
    return ( 
        <div>
            <input
                type="text"
                placeholder="Search Game ..."
                onChange={ (e) => {handleInputChange(e)}}
            />
            <button
                onClick={(e) => {handleInputSubmit(e)}}
                type="submit"
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar