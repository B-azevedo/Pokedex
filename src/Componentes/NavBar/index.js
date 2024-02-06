import React, {useContext} from "react"
import './Navbar.css'
import FavoriteContext from "../../Context/favoritesContext"

const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    const pokelogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav className="navbar-header">
            <div>
                <img alt="poke-logo" src={pokelogo} className="poke-img"/>
            </div>
            <dic>{favoritePokemons.length}❤️</dic>
        </nav>
    )
}

export default Navbar

//<dic>{favoritePokemons.length : 0}❤</dic>