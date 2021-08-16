import React from "react";
import { StyleSheet, Button, View } from "react-native";

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
});

const Panel = ({onPressLeft, textLeft, tooglePointsFilter}) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft} />
      <Button title="Show/Hide" onPress={tooglePointsFilter}/>
    </View>
  );
};

export default Panel;
