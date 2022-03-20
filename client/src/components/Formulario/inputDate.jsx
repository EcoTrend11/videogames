const InputDate = () =>{

    let val = document.getElementById('dt').max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
    

    return(
        <div>
            <input type="date" min='1899-01-01' id="dt" /> 
        </div>
    )
}

export default InputDate