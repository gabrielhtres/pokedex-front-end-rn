import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'red'
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
      height: '5%',
      marginTop: 20,
      marginBottom: 40,
      padding: 10,
      paddingLeft: 25,
      backgroundColor: '#F2F2F2',
      color: '#747476',
      borderRadius: 10
    },
    InputLogin: {
      minHeight: '7%',
      marginTop: 20,
      padding: 10,
      paddingLeft: 25,
      backgroundColor: '#F2F2F2',
      color: '#747476',
      borderRadius: 10,
      marginBottom: 20
    },
    BotaoPadrao: {
      marginTop: 20,
      borderRadius: 10,
      backgroundColor: 'red',
      minHeight: '7%',
      color: 'white',
      textAlign: 'center',
      justifyContent: 'center'
    },
    TextoBotao: {
      color: 'white',
      textAlign: 'center',
      justifyContent: 'center'
    },
    ListaPokemon : {
      marginTop: 10,
      Card: {
        backgroundColor: 'green',
        width: '100%',
        height: '5%',
        marginBottom: '12%',
        borderRadius: 15,
        display: 'flex',
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        InfoCardPokemon: {
          flexGrow: 3,
          Types: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }
        },
        ImageCardPokemon: {
          flexGrow: 1,
          Image: {
            width: 170,
            height: 170,
            marginTop: '-40%'
          }
        }
      },
      
    }
});