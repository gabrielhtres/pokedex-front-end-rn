import React from "react";
import { View, Image, Text } from "react-native";
import { Styles } from "../../Styles";

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
                    style={{ width: 150, height: 150, flexShrink: 40, paddingRight: "5%" }}
                />
            <View style={{
                marginLeft: "5%",
                flexShrink: 60
            }}>
                <Text style={{ fontSize: 14, color: "dark", fontWeight: 'bold' }}>#001</Text>
                <Text style={{ fontSize: 18, color: "white", marginBottom: 2 }}>Bulbassauro</Text>
                <View style={ Styles.ViewDadosPokedex }>
                    <Image source={require('../../assets/badges/Grass.png')} style={{ width: 62, height: 25, borderRadius: 5, marginRight: 2, marginBottom: 2 }}/>
                    <Image source={require('../../assets/badges/Poison.png')} style={{ width: 67, height: 25, borderRadius: 5 }}/>
                </View>
            </View>
        </View>
    );
}

export default InfoTopoPokemon;