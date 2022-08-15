import { Styles } from "./Styles";
import React, { useState, setState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const PokemonProfile = (props) => {
    const [pokemon, setPokemon] = useState(["Bulbassauro", "Charmander"]);
    console.log(pokemon)

    function mudarPokemons() {
        const navigation = useNavigation();
        navigation.goTo()
    }

    return(
        <View style={{
            height: '100%',
            backgroundColor: '#cef79f'
        }}>
            <View style={{ // Parte de cima da tela
                height: "40%",
                backgroundColor: '#cef79f'
            }}>
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
                        <Text>#001</Text>
                        <Text>Bulbassauro</Text>
                        <Image source={require('./assets/badges/Grass.png')} style={{ width: 50, height: 20, borderRadius: 5, marginRight: 2, marginBottom: 2 }}/>
                        <Image source={require('./assets/badges/Poison.png')} style={{ width: 50, height: 20, borderRadius: 5 }}/>
                    </View>
                </View>
                <View style={{ // Parte dos botões
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: "auto",
                    marginBottom: "5%"
                }}>
                    <Text style={{ color: "white" }}>Sobre</Text>
                    <Text style={{ color: "white" }}>Status</Text>
                    <Text style={{ color: "white" }}>Evolução</Text>
                </View>
            </View>

            <View style={{
                height: "60%",
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                
            </View>
        </View>
    );
}

export default PokemonProfile;