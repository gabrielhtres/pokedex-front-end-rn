import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
import { Styles } from "../../Styles";

function validateLogin() {
    console.log('Login');
}

const Login = () => {
  return (
    <View style={{ backgroundColor: 'white', minHeight: '100%', padding: '8%', justifyContent: 'center' }}>
        <Text style={ Styles.TextoPadrao }>Usuário</Text>
        <TextInput style={ Styles.InputLogin }/>
        <Text style={ Styles.TextoPadrao }>Senha</Text>
        <TextInput style={ Styles.InputLogin }/>
        <Pressable onPress={validateLogin} style={ Styles.BotaoPadrao }>
            <Text style={ Styles.TextoBotao }>Entrar</Text>
        </Pressable>
    </View>
  );
}

export default Login;