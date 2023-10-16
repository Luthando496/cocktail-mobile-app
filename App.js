import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import Navigation from './Navigation';


export default function App() {
  return (
    <Provider>
      <Navigation  />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
