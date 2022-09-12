import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, FlatList } from 'react-native';
import { Styles } from "../../Styles";
import { Link } from '@react-navigation/native';
import Input from '../components/Input';
import axios from 'axios';
import ListaPokemon from '../components/ListaPokemon';
import { teste, getAllPokemons } from '../api';

const Home = () => {
  const [ data, setData ] = useState([]);
  // console.log(data);
  const getDados = async () => {
    const dados = await getAllPokemons();
    setData(dados);
    // for( let i=0; i<20; i++) {
    //   console.log(dados[i]);a\
    // }
  }

  // getDados();
  useEffect(() => {
    // console.log('teste');
    getDados();
    // console.log('executou')
  }, []);

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
      <ListaPokemon data={data} />
    </View>
  );
}

export default Home;