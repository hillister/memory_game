
function Card(){
    
    async function getPokemon(){
        try {
            const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon`)
            const pokeData = await pokeApi.json()

            return pokeData;
        } catch(err){
            console.log('Error with API')
        }
    }

    return(
        <div className="container">
            <img></img>
            <h3></h3>
        </div>
    )
}

export default Card