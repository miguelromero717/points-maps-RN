import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { Input, List, Map, Modal, Panel } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointTmp, setPointTmp] = useState({});
  const [name, setName] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("new_point");
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(true)

  const handleLongPress = ({ nativeEvent }) => {
    setPointTmp(nativeEvent.coordinate);
    setVisibility(true)
    setVisibilityFilter('new_point')
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newPoint = {
      coordinate: pointTmp,
      name: name,
    };
    setPoints([...points, newPoint]);
    setVisibility(false);
    setName("");
  };

  const handleList = () => {
    setVisibility(true)
    setVisibilityFilter('all_points')
  }

  const tooglePointsFilter = () => setPointsFilter(!pointsFilter)

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} points={points} pointsFilter={pointsFilter}/>
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <View style={styles.form}>
            <Input
              title="Name"
              placeholder="Point name"
              onChangeText={handleChangeText}
            />
            <Button title="Acept" onPress={handleSubmit} />
          </View>
        ) : (
          <List points={points} closeModal={() => setVisibility(false)}/>
        )}
      </Modal>
      <Panel onPressLeft={handleList} textLeft='List' tooglePointsFilter={tooglePointsFilter}/>
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
  form: {
    padding: 15
  }
});
