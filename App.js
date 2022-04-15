import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './components/Header';
import ListMobil from './components/ListMobil';
import MainButton from './components/MainButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ListMobil/>
      <MainButton />
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
  }
});
