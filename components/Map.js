import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const window = Dimensions.get("screen");

const styles = StyleSheet.create({
  map: {
    height: window.height - 150,
    width: window.width,
  },
});

const Map = ({ onLongPress }) => {
  return <MapView style={styles.map} onLongPress={onLongPress} />;
};

export default Map;
