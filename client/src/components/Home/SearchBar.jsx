import { useState } from "react"
import { useDispatch } from "react-redux";
import { getVideogamesName } from "../../store/action";
import { BiSearch } from 'react-icons/bi';
import style from "./SearchBar.module.css"
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
        <div className={style.GeneralContainer}>
            <div className={style.container}>
                <div className={style.containerInputs}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Search Game ..."
                        onChange={ (e) => {handleInputChange(e)}}
                    />
                    <button
                        className={style.button}
                        onClick={(e) => {handleInputSubmit(e)}}
                        type="submit"
                    >
                        <BiSearch/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar