import React from "react";
import { FlatList, Text, View } from "react-native";
import { getAllPokemons } from '../../API';
// import axios from "axios";

async function ListaPokemon() {
    const dadosMock = [{
        name: 'Bulbassauro'
    },
    {
        name: 'Charmander'
    }];
    
    const dados = getAllPokemons()
        .then(res => {
            console.log(res);
            return res.data;
        })
      
      console.log(dados);

    const renderItem = ({ item }) => (
        <Text style={{ color: 'black' }}>{item.name}</Text>
    );

    return(
        <View>
            <FlatList
            data={dados}
            renderItem={({item}) => <Text style={{ color: 'black' }}>{item.name}</Text>}
            // keyExtractor={item => item.name}
            />
        </View>
    );
}

export default ListaPokemon;