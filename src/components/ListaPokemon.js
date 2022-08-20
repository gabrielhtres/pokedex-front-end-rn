import React from "react";
import { Text, View } from "react-native";
import axios from "axios";

async function ListaPokemon() {
    const dados = await axios({
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
      });
      
      const name = dados.data.name;
      console.log(name);

    return(
        <View></View>
    );
}

export default ListaPokemon;