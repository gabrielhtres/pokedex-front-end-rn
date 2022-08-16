import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from "../../Styles";
import { Link } from '@react-navigation/native';

const Home = () => {
    return (
        <View style={ Styles.container }>
          <Text style={ Styles.TextoPreto }>Open up App.js to start working on your app!</Text>
          <Link style={ Styles.TextoPreto } to={{ screen: 'PokemonProfile', params: { id: 'jane' } }}>
            PokemonProfile
          </Link>
        </View>
      );
}

export default Home;