import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, Button, Pressable, KeyboardAvoidingView } from 'react-native';
import { Styles } from "../../Styles";

function validateLogin() {
    console.log('Login');
}

const Login = () => {
  return (
    <KeyboardAvoidingView behavior='padding'>
        <View style={{ backgroundColor: 'white', minHeight: '100%',/*minHeight: '100%', */padding: '8%', justifyContent: 'center' }}>
            <Image source={require('../../assets/LogoHome.png')} style={{ width: '100%', height: '8%', marginBottom: 40 }}/>
            <Text style={ Styles.TextoPadrao }>Usuário</Text>
            <TextInput style={ Styles.InputLogin }/>
            <Text style={ Styles.TextoPadrao }>Senha</Text>
            <TextInput style={ Styles.InputLogin }/>
            <Pressable onPress={validateLogin} style={ Styles.BotaoPadrao }>
                <Text style={ Styles.TextoBotao }>Entrar</Text>
            </Pressable>
        </View>
    </KeyboardAvoidingView>
  );
}

export default Login;