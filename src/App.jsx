import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
   const [pokemons, setPokemons] = useState([]);
   useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon-species?limit=1025')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPokemons(data.results);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
   <div>
      {pokemons.map((pokemon) => {
         return (
            <div className='card'>
               <h1 className='text-center'>{pokemon.name}</h1>
               <p>{pokemon.url}</p>
            </div>
         );
      })}
   </div>
   );
};
export default App;
