import React from "react";
import { StyleSheet, View } from "react-native";
import { Map, Modal, Panel } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
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
