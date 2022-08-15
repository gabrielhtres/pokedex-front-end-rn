import React from 'react';
import { Text, View, Button } from 'react-native';
import { Styles } from "./Styles";
import { Link } from '@react-navigation/native';

const Home = () => {
    return (
        <View style={Styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Link to={{ screen: 'PokemonProfile', params: { id: 'jane' } }}>
            PokemonProfile
          </Link>
        </View>
      );
}

export default Home;