import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { filterGenre } from "../../store/action"
import style from "./FilterByGenre.module.css"

const FilterByGenre = () =>{
    const dispatch = useDispatch()
    const [value,setValue] =useState([])
    
    const getGenres = async () =>{
        let getApi = (await axios.get("http://localhost:3001/genres")).data
        setValue(getApi)
    }

    useEffect(function(){
        getGenres()
    },[])

    function FilterGenre (e){
        let key = e.target.name;
        let value = e.target.value;
        dispatch(filterGenre(key, value))
    }



    return (
        <div className={style.container}>
            <label className={style.title}> Filter by genres :  </label>
            <select className={style.select} name="genres" onChange={FilterGenre}>
                <option className={style.option} value = "">{"<"}--SELECT--{">"}</option>
                {value.map(e => <option className={style.option} key={e.id} value={e.name}>{e.name}</option>)}
            </select>
        </div>
    )
}

export default FilterByGenre