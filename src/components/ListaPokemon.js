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
    
    // const dados = getAllPokemons()
    //     .then(res => {
    //         console.log(res);
    //         return res.data;
    //     })
      
    //   console.log(dados);

    const renderItem = ({item}) => {
        console.log(item);
        return(
            <View style={{ width: '100%', height: '50%', backgroundColor: 'green' }}>
                <Text style={{ color: 'black' }}>{item.name}</Text>
            </View>
        );
    }

    return(
        <FlatList
            data={dadosMock}
            renderItem={renderItem}
            // keyExtractor={item => item.name}
        />
    );
}

export default ListaPokemon;