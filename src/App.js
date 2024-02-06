import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Componentes/NavBar';
import Searchbar from './Componentes/Searchbar';
import Pokedex from './Componentes/Pokedex';
import { getPokemons, getPokemonData, searchPokemon } from './Componentes/Apipokemon';
import { FavoriteProvider } from './Context/favoritesContext';
//import Pages from './Componentes/Paginas';

const favoritesKey = "f"
function App() {
  const [page, setPages] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [NotFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPage = 25;
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false)
      const data = await getPokemons(itensPage, itensPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPage(Math.ceil(data.count / itensPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }
  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updateFavorites.splice(favoriteIndex, 1)
    } else {
      updateFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites));
    setFavorites(updateFavorites);
  }
  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPages(0)
      setTotalPage(1)
    }
    setLoading(false)
  }
  return (

    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}>
      <div>
        <Navbar />
        <Searchbar onSearch={onSearchHandler} />
        {NotFound ? (<div class-name="not-found-text"> Meteu essa?! </div> ):
        
        
        (<Pokedex
          pokemons={pokemons}
          loading={loading}
          pages={page}
          setPages={setPages}
          totalPages={totalPages}
        />)}
      </div>
    </FavoriteProvider>
  );
}

export default App;