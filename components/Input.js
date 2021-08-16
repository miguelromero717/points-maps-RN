import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        height: 40,
    }
})

export default ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  );
};
