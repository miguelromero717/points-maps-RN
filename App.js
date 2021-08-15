import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'

const window = Dimensions.get('screen')

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: window.height,
    width: window.width
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
