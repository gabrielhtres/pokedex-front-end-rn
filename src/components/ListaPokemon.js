import React from "react";
import { FlatList, Image, Pressable, Text, TouchableHighlight, View } from "react-native";
import { getAllPokemons } from '../../API';
import { Styles } from "../../Styles";
import Types from "./Types";

const handleClick = () => {
    console.log('clicado');
}

const ListaPokemon = (props) => {
    const dadosPokemons = props.data;

    return(
        <Pressable style={ Styles.ListaPokemon } onPress={handleClick}>
            {dadosPokemons.map(dados => (
                <View key={dados.id} style={ Styles.ListaPokemon.Card }>
                    <View style={ Styles.ListaPokemon.Card.InfoCardPokemon }>
                        <Text>#001</Text>
                        <Text>{dados.name}</Text>
                        <Types types={dados.types} />
                    </View>
                    <View style={ Styles.ListaPokemon.Card.ImageCardPokemon }>
                        <Image
                            style={ Styles.ListaPokemon.Card.ImageCardPokemon.Image }
                            source={{ uri: dados.images.artwork }} />
                    </View>
                </View>
            ))}
        </Pressable>
    );
}

export default ListaPokemon;