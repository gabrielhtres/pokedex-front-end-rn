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
    },
    TopoHome: {
      width: '100%',
    },
    Borda: {
      borderColor: 'red',
      borderWidth: 2,
      borderStyle: 'solid'
    },
    TextoPadrao: {
      color: 'black',
      textAlign: 'center'
    },
    InputHome: {
      height: '30%',
      marginTop: 20,
      // borderWidth: 1,
      padding: 10,
      backgroundColor: '#F2F2F2',
      color: '#747476'
    }
});