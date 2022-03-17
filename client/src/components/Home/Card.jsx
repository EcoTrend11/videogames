const Card = ({e}) =>{
    return(
        <div>
            <div>
                <img src={e.background_image} alt="img not found"/>
            </div>
            <div>
                <h2>
                    {e.name}
                </h2>
                <div>
                    <h4>
                        Genres:
                    </h4>
                    <ul>
                        {e.genres.map( p =>
                            <li key={p.id}>{p.name}</li>)}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Card