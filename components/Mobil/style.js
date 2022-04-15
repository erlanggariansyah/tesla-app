import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  mobilContainer: {
    width: '100%',
    height: Dimensions.get('window').height
  },
  judul: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },
  mainJudul: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  subJudul: {
    fontSize: 12,
    color: '#171A20CC'
  },
  bg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  buttonContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
  }
});

export default styles;