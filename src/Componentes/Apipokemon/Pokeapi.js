export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}
//valores utilizados anteriormente = limit = 100  ; offset = 200
//obs alterei os valores de limit e offset para tentar encaixar todos os pokemons na pokedex
export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}