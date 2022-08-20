import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../../Styles";

const DadosPokedex = () => {
    return(
        <View>
            <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>Sobre</Text>
            <Text style={{ color: 'black', marginTop: 20 }}>Bulbasaur pode ser visto cochilando sob a luz do sol. Há uma semente em suas costas. Ao absorver os raios do sol, a semente cresce progressivamente.</Text>
            <Text style={{ color: 'green', fontSize: 16, marginTop: 30, fontWeight: 'bold' }}>Pokedex Dados</Text>
            <View style={{ width: '100%', width: '90%', marginTop: 20 }}>
                <View style={ Styles.ViewDadosPokedex }>
                    <Text style={ Styles.TituloDadosPokemon }>Espécie</Text>
                    <Text style={ Styles.TextoPreto }>Seed Pokémon</Text>
                </View>
                <View style={ Styles.ViewDadosPokedex }>
                    <Text style={ Styles.TituloDadosPokemon }>Altura</Text>
                    <Text style={ Styles.TextoPreto }>0.7m</Text>
                </View>
                <View style={ Styles.ViewDadosPokedex }>
                    <Text style={ Styles.TituloDadosPokemon }>Peso</Text>
                    <Text style={ Styles.TextoPreto }>6.9kg</Text>
                </View>
                <View style={ Styles.ViewDadosPokedex }>
                    <Text style={ Styles.TituloDadosPokemon }>Habilidades</Text>
                    <Text style={ Styles.TextoPreto }>Habilidades</Text>
                </View>
                <View style={ Styles.ViewDadosPokedex }>
                    <Text style={ Styles.TituloDadosPokemon }>Fraquezas</Text>
                    <Text style={ Styles.TextoPreto }>Fraquezas</Text>
                </View>
            </View>
        </View>
    );
}

export default DadosPokedex;