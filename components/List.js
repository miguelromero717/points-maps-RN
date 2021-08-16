import React from "react";
import { Button, FlatList, Text, View, StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height - 250
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 40,
        justifyContent: 'center',
        padding: 10
    },
    button: {
        paddingBottom: 15
    }
})

export default ({ points }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((p) => p.name)}
          renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
          <Button title="Close"/>
      </View>
    </>
  );
};
