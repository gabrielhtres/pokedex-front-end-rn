import React from "react";
import { TextInput } from "react-native";
import { Styles } from "../../Styles";

const Input = () => {
    return(
        <TextInput style={ Styles.InputHome } placeholder='Qual Pokémon você está procurando?' placeholderTextColor='#747476'></TextInput>
    );
}

export default Input;