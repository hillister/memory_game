import { useState, useEffect } from "react";

function Card(){
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        async function getPokemon(){
            try {
                const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon`)
                const pokeData = await pokeApi.json()
                const randomIndex = Math.floor(Math.random() * 20);
                console.log(randomIndex)
                setPokemon(pokeData.results[randomIndex]);
            } catch(err){
                console.log('Error with API')
            }
        }

        getPokemon();
    }, []);

    return(
        <div className="container">
            {pokemon ? (
                <>
                <h3>{pokemon.name}</h3>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Card