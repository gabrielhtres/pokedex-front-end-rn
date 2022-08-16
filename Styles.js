import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black'
    },
    ViewDadosPokedex: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15
    },
    TituloDadosPokemon: {
      color: 'black',
      fontWeight: 'bold'
    },
    TextoPreto: {
      color: 'black'
    }
});