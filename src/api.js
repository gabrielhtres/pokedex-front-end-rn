import React from "react";
import axios from "axios";

const PARAMS = {
    "method": 'get',
    "headers": {
        "Content-Type": 'application/json'
    }
}

async function getAllPokemons(url) {
    const res = await axios.get(url);
    // console.log(data.results);
    return res.data.data;
}

export { getAllPokemons };

