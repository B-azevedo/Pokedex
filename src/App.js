import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Componentes/NavBar';
import Searchbar from './Componentes/Searchbar';
import Pokedex from './Componentes/Pokedex';
import { getPokemons, getPokemonData } from './Componentes/Apipokemon/Pokeapi';

function App() {
  const [pages, setPages] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPage = 25;
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPage, itensPage * pages);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPage(math.ceil(data.count / itensPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }
  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, [])

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex 
      pokemons={pokemons} 
      loading={loading} 
      pages={pages} 
      totalPages={totalPages} 
      />
    </div>
  );
}

export default App;