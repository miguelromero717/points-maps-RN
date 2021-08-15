import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const window = Dimensions.get("screen");

const styles = StyleSheet.create({
  map: {
    height: window.height,
    width: window.width,
  },
});

const Map = () => {
  return <MapView style={styles.map} />;
};

export default Map;
