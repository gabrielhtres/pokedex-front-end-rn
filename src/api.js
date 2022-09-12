import React from "react";

const PARAMS = {
    "method": 'get',
    "headers": {
        "Content-Type": 'application/json'
    }
}

async function getAllPokemons(url) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();
    console.log(data.results);
    return data.results;
}

function teste() {
    console.log('entrou')
}
// }

export { getAllPokemons, teste };

