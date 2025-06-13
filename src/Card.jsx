import { useState, useEffect } from "react";

function Card({pokemon}){
    const [pokemonImg, setPokemonImg] = useState(null)
    useEffect(() => {
        async function getPokemonImage(){
            try {
                const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const pokeData = await pokeApi.json()
                const imgURL = pokeData.sprites.front_default
                setPokemonImg(imgURL)
            } catch(err){
                console.log('Error with API')
            }
        }
  
        getPokemonImage();
    }, []);
    return(
        <>
            <h3>{pokemon.name}</h3>
            {pokemonImg ? (
                <img src={pokemonImg} alt={pokemon.name} />
            ) : (
                <p>Loading image...</p>
            )}
        </>
    )
}

export default Card