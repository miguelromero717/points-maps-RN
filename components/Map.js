import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const window = Dimensions.get("screen");

const styles = StyleSheet.create({
  map: {
    height: window.height - 150,
    width: window.width,
  },
});

const Map = ({ onLongPress, points, pointsFilter }) => {
  return (
    <MapView style={styles.map} onLongPress={onLongPress}>
      {pointsFilter && points.map((p) => (
        <Marker key={p.name} coordinate={p.coordinate} title={p.name} />
      ))}
    </MapView>
  );
};

export default Map;
