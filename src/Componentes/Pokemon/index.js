import React from "react";
import './Pokemon.css'

const Pokemon = (props) => {
    const {pokemon} = props
    const onHeartClick = () => {
        console.log("pode favoritar")
    }
    const heart = "❤"
    return (
    <div className="pokemon-card">
        <div className="pokemon-image-card">
        <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3>{pokemon.name}</h3>
                <div>{pokemon.id}</div>
        </div>
        <div className="card-bot"></div>
            <div className="pokemon-type">
                    {pokemon.types.map((type, index) => {
                    return (
                        <div key={index} className="pokemon-type-text">{type.type.name}</div> 
                    )
                    })}
            </div>
            <bottom className="pokemon-heart" onClick={onHeartClick}>
                {heart}
            </bottom>
        </div>    
    </div>)
}
export default Pokemon;