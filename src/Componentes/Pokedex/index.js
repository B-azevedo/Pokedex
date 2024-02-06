import React from "react";
import './Pokedex.css'
import {Pokemon, loading} from "../Pokemon";
import Pages from "../Paginas/pages";

const Pokedex = (props) => {
    const { pokemons, loading, page, totalPages } = props;
    const onLeftClickHandler = () => {
        console.log("volta")
    }
    const onRightClickHandler = () => {
        console.log("avança")
    }
    return (
        <div>
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <Pages page={page+1} totalPages={totalPages} onLeftClick={onLeftClickHandler} onRightClick={onRightClickHandler}/>
            </div>
            {loading ? (
                <div>Carregando, segura fera...</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon keys={index} pokemon={pokemon} />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Pokedex;

