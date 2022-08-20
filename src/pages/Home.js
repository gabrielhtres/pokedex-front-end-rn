import React from 'react';
import { ScrollView, Text, View, Image, TextInput, FlatList } from 'react-native';
import { Styles } from "../../Styles";
import { Link } from '@react-navigation/native';
import Input from '../components/Input';

const Home = () => {
    return (
        <ScrollView style={{ padding: 30, display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
          <View style={ { ...Styles.container, display: 'flex', flexDirection: 'row', height: 36, justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%' } }>
            <View style={{ width: '60%', height: '100%' }}>
              <Image source={require('../../assets/LogoHome.png')} style={{ height: 36, width: '100%'  }}/>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: '40%', justifyContent: 'space-around' }}>
              <Image source={ require('../../assets/SorterIcon.png') } style={{ width: 30, height: 27 }} />
              <Image source={ require('../../assets/FilterIcon.png') } style={{ width: 30, height: 27 }} />
            </View>
          </View>
          <View style={{ }}>
            <Text style={{ ...Styles.TextoPadrao, fontSize: 30, fontWeight: 'bold', marginTop: '10%' }}>Geração I</Text>
            <Text style={{ ...Styles.TextoPadrao, marginTop: '5%'}}>Pesquise o Pokémon pelo seu nome...</Text>
            <Input />
          </View>
        </ScrollView>
      );
}

export default Home;