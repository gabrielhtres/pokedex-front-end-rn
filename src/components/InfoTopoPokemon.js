import React from "react";
import { View, Image, Text } from "react-native";

const InfoTopoPokemon = () => {
    return(
        <View style={{  // Parte do Pokémon com imagem e detalhes
            height: "80%",
            // backgroundColor: "red",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
        }}>
            <Image
                    source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" /*require('./assets/bulbasaur.png')*/ }}
                    style={{ width: 100, height: 100, flexShrink: 50, paddingRight: "5%" }}
                />
            <View style={{
                marginLeft: "5%"
            }}>
                <Text style={{ fontSize: 13, color: "dark" }}>#001</Text>
                <Text style={{ fontSize: 18, color: "gray", marginBottom: 2 }}>Bulbassauro</Text>
                <Image source={require('../../assets/badges/Grass.png')} style={{ width: 62, height: 25, borderRadius: 5, marginRight: 2, marginBottom: 2 }}/>
                <Image source={require('../../assets/badges/Poison.png')} style={{ width: 67, height: 25, borderRadius: 5 }}/>
            </View>
        </View>
    );
}

export default InfoTopoPokemon;