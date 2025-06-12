import { useState, useEffect } from "react";

function Card(){
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        async function getPokemon(){
            try {
                const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon`)
                const pokeData = await pokeApi.json()

                setPokemon(pokeData.results[0]);
            } catch(err){
                console.log('Error with API')
            }
        }

        getPokemon();
    }, []);

    return(
        <div className="container">
            <img></img>
            <h3></h3>
        </div>
    )
}

export default Card