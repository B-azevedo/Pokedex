import React, { useState } from "react";
import './Searchbar.css'

const Searchbar = () => {
    const [search, setSearch] = useState("dito")

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonCLickHandler = () => {
        console.log("pokemon: ", search)
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Busca de pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonCLickHandler} >Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar