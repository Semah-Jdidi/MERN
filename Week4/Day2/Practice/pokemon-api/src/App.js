import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response=>{return response.json()})
    .then(response=> setPokemon(response.results))
    .catch(err => console.log(err))
  },[]
  )

  return (
    <div className="App">
      <ul style={{width:'400px', fontSize:'25px', backgroundColor:'grey', color:'white', borderRadius:'10px'}}>
        {
          pokemon.map((pokemons, i) =>{
            return(
              <li key={i}>
                {pokemons.name}
              </li>
            )
          }
          )
        }
      </ul>
    </div>
  );
}

export default App;