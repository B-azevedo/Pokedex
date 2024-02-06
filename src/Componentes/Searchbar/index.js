import React, { useState } from "react";
import './Searchbar.css'
import { searchPokemon } from "../Apipokemon/Pokeapi";

const Searchbar = () => {
    const [search, setSearch] = useState("dito");
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onButtonCLickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Busca de pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonCLickHandler} >Buscar</button>
            </div>

            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.font_default} alt={pokemon.name} />
                </div>
            ) : null}
        </div>
    )
}

export default Searchbar