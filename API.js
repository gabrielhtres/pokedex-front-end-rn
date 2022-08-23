import axios from "axios";

const getAllPokemons = async () => {
    return axios.get({
            method: "get",
            url: "https://pokeapi.co/api/v2/pokemon/ditto",
    });
}

export default getAllPokemons;