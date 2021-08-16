import React from "react";
import { StyleSheet, Modal, Text, View } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

const ModalCustom = () => {
  return (
    <Modal animationType="slide" transparent={true} visible={false}>
      <View style={styles.center}>
        <View style={styles.modalView}>
          <Text>Hola Mundo</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCustom;
