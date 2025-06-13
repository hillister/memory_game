import { useState, useEffect } from 'react'
import Card from './Card.jsx'


function App() {
  const [pokemon, setPokemon] = useState(null)
  const [availablePokemon, setAvailablePokemon] = useState([])

  useEffect(() => {
      async function getPokemon(){
          try {
              const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon`)
              const pokeData = await pokeApi.json()
              const pokemonList = pokeData.results

                const randomIndex = Math.floor(Math.random() * pokemonList.length);
                const selected = pokemonList[randomIndex]

                const updatedList = pokemonList.filter((_, index) => index !== randomIndex);

                setPokemon(selected)
                setAvailablePokemon(updatedList);
                console.log(updatedList)
          } catch(err){
              console.log('Error with API', err)
          }
      }

      getPokemon();
  }, []);

  return (
    <>  
      <div className="container">
        {pokemon ? <Card pokemon={pokemon} /> : <p>Loading...</p>}
      </div>
    </>
  )
}

export default App
