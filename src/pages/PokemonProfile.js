// import { Styles } from "../../Styles";
import React, { useState, setState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import DadosPokedex from './components/DadosPokedex'
import InfoTopoPokemon from '../components/InfoTopoPokemon';

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
            backgroundColor: '#009900'
        }}>
            <View style={{ // Parte de cima da tela
                height: "40%",
            }}>
                <InfoTopoPokemon />
                <View style={{ // Parte dos botões
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: "auto",
                    marginBottom: "5%"
                }}>
                    <Text style={{ color: "white" }}>Sobre</Text>
                    <Text style={{ color: "#cccccc" }}>Status</Text>
                    <Text style={{ color: "#cccccc" }}>Evolução</Text>
                </View>
            </View>

            <View style={{
                height: "60%",
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 40
            }}>
                <DadosPokedex />
            </View>
        </View>
    );
}

export default PokemonProfile;