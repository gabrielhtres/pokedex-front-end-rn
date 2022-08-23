import React from "react";
import { TextInput } from "react-native";
import { Styles } from "../../Styles";

const Input = () => {
    return(
        <TextInput style={{ ...Styles.InputHome, marginTop: '5%' }} placeholder='Qual Pokémon você está procurando?' placeholderTextColor='#747476'></TextInput>
    );
}

export default Input;