import React from "react";

const DadosPokedex = () => {
    return(
        <View>
            <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>Sobre</Text>
            <Text style={{ color: 'black', marginTop: 20 }}>Bulbasaur pode ser visto cochilando sob a luz do sol. Há uma semente em suas costas. Ao absorver os raios do sol, a semente cresce progressivamente.</Text>
            <Text style={{ color: 'green', fontSize: 16, marginTop: 30, fontWeight: 'bold' }}>Pokedex Dados</Text>
            <View style={{ width: '100%' }}>
                <Text>Espécie</Text>
                <Text>Seed Pokémon</Text>
            </View>
        </View>
    );
}

export default DadosPokedex;