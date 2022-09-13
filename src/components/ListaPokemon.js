import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { getAllPokemons } from '../../API';
import { Styles } from "../../Styles";
import Types from "./Types";

const ListaPokemon = (props) => {
    const dadosPokemons = props.data;

    return(
        <View style={ Styles.ListaPokemon }>
            {dadosPokemons.map(dados => (
                <View style={ Styles.ListaPokemon.Card }>
                    <View style={ Styles.ListaPokemon.Card.InfoCardPokemon }>
                        <Text>#001</Text>
                        <Text>{dados.name}</Text>
                        <Types types={dados.types} />
                    </View>
                    <View style={ Styles.ListaPokemon.Card.ImageCardPokemon }>
                        <Image style={ Styles.ListaPokemon.Card.ImageCardPokemon.Image } source={{ uri: dados.images.artwork }} />
                    </View>
                </View>
            ))}
        </View>
    );
}

export default ListaPokemon;