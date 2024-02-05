import React from "react"
import './Navbar.css'

const Navbar = () => {
    const pokelogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav className="navbar-header">
            <div>
                <img alt="poke-logo" src={pokelogo} className="poke-img"/>
            </div>
        </nav>
    )
}

export default Navbar