import React from 'react';
import { StyleSheet, View } from 'react-native';

import Conversor from './Components/Conversor';

export default function App() {
  return (
    <View style={styles.container}>
      <Conversor moedaA='USD' moedaB='BRL' />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center'
    }
});
