import React from "react";
import './Pokedex.css'
import Pokemon from "../Pokemon";
import Pages from "../Paginas";

const Pokedex = (props) => {
    const { pokemons, loading, pages, setPages, totalPages } = props;
    const onLeftClickHandler = () => {
        if(pages > 0) {
            setPages(pages-1)
        }
    }
    const onRightClickHandler = () => {
        if(pages + 1 !== totalPages){
            setPages(pages+1)
        } 
    }
    return (
        <div>
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <Pages 
                page={pages+1} 
                totalPages={totalPages} 
                onLeftClick={onLeftClickHandler} 
                onRightClick={onRightClickHandler}
                />
            </div>
            {loading ? (
                <div>Carregando...</div>
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

