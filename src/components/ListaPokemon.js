import React from "react";
import { FlatList, Text, View } from "react-native";
import { getAllPokemons } from '../../API';
import { Styles } from "../../Styles";

const ListaPokemon = (props) => {
    const dadosPokemons = props.data;
    // console.log(dadosPokemons)

    return(
        <View style={ Styles.ListaPokemon }>
            {dadosPokemons.map(element => (
                // console.log(element.name)
                <View style={ Styles.ListaPokemon.Card }>
                    <Text>{ element.name }</Text>
                </View>
            ))}
        </View>
    );
}

export default ListaPokemon;