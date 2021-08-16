import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Map, Modal, Panel } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);

  const handleLongPress = ({ nativeEvent }) => {
    setPoints([...points, { coordinate: nativeEvent.coordinate }]);
  };

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Modal />
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
