import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mobilContainer: {
    width: '100%',
    height: '100%',
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
    color: 'grey'
  },
  bg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  }
});

export default styles;