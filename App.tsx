import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import PokemonListScreen from './src/screens/PokemonListScreen';

const App = (): React.JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>
    <PokemonListScreen />
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
