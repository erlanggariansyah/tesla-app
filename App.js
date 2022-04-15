import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ImageBackground source={require("./assets/images/ModelS.jpeg")}
      style={styles.bg}
      />

      <View style={styles.mobilContainer}>
        <View style={styles.judul}>
          <Text style={styles.mainJudul}>Model S</Text>
          <Text style={styles.subJudul}>Starting at $69,420</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    fontWeight: 'bold'
  },
  subJudul: {
    fontSize: 12,
    color: 'grey'
  },
  bg: {
    width: '100%',
    height: '100%'
  }
});
