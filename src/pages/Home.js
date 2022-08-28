import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, FlatList } from 'react-native';
import { Styles } from "../../Styles";
import { Link } from '@react-navigation/native';
import Input from '../components/Input';
import axios from 'axios';
import ListaPokemon from '../components/ListaPokemon';

const Home = () => {
  const [ data, setData ] = useState('');
  
  const getDados = async () => {
    try {
    // const response2 = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    // const dadoVSF = response2.json()
    //   .then((json) => {
    //     // console.log(json.name);
    //     return json.name;
    //   });
    // console.log(dadoVSF);
     const response = await fetch('https://reactnative.dev/movies.json');
    //  console.log(response);
     const json = await response.json();
    //  console.log(dadoVSF);
     setData(json.movies);
   } catch (error) {
     console.error(error);
   } finally {
    //  setData(false);
   }
  }

  useEffect(() => {
    getDados();
  }, []);

  const renderItem = ({item}) => {
    console.log(item);
    return(
      <View style={{ width: '100%', height: '50%', backgroundColor: 'green' }}>
        <Text style={{ color: 'black' }}>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: 'white', minHeight: '100%', padding: '8%' }}>
      <View style={ { display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', /*height: '100%'*/ } }>
        <View style={{ marginBottom: '2%', width: '60%', height: '100%' }}>
          <Image source={require('../../assets/LogoHome.png')} style={{ height: 36, width: '100%' }}/>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', width: '40%', justifyContent: 'space-around', height: '100%' }}>
          <Image source={ require('../../assets/SorterIcon.png') } style={{ width: 30, height: 27 }} />
          <Image source={ require('../../assets/FilterIcon.png') } style={{ width: 30, height: 27 }} />
        </View>
      </View>
      <Text style={{ ...Styles.TextoPadrao, fontSize: 30, fontWeight: 'bold', marginTop: '5%' }}>Geração I</Text>
      <Text style={{ ...Styles.TextoPadrao, marginTop: '5%'}}>Pesquise o Pokémon pelo seu nome...</Text>
      <Input />
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={item => item.name}
      /> */}
      <ListaPokemon />
    </View>
  );
}

export default Home;