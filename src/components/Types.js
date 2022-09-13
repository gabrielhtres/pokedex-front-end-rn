import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../../Styles";

const Types = (props) => {
    const types = props.types;
    // console.log(types);
    
    return(
        <View style={ Styles.ListaPokemon.Card.InfoCardPokemon.Types }>
            {types.map(type => (
                <Text key={type.id}>{type.name}</Text>
            ))}
        </View>
    );
}

export default Types;