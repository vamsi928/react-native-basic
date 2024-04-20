import React, { useState } from "react";
import { View, TextInput, StyleSheet, Modal, Image } from "react-native";
import { PressableButton } from "./PressableButton";

export const GoalInput = ({ goals, setGoals, showModal, setShowModal }) => {
  const [currrentGoal, setCurrentGoal] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onInputChange = (value) => {
    setCurrentGoal(value);
  };

  const onAddGoals = (event) => {
    if (currrentGoal) {
      let _currentIndex = currentIndex + 1;
      let _goals = [...goals];
      _goals.push({ goalText: currrentGoal, id: _currentIndex });
      setGoals(_goals);
      setCurrentIndex(_currentIndex);
      setCurrentGoal();
      setShowModal(false);
    } else {
      alert("Please enter a goal");
    }
  };
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.goalContainer}>
        <Image
          source={require("../assets/goal.png")}
          style={styles.imgContainer}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Please enter your goal"
          onChangeText={onInputChange}
          value={currrentGoal}
        />
        <View style={styles.btnContainer}>
          <PressableButton
            title="Cancel"
            onPress={() => {
              setShowModal(false);
              setCurrentGoal();
            }}
            btnColor="#f31282"
          />
          <PressableButton
            title="Add"
            onPress={onAddGoals}
            btnColor="#b180f0"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
    flex: 1,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    margin: 8,
    padding: 16,
    borderRadius: 6,
    color: "#120438",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  imgContainer: {
    width: 150,
    height: 150,
  },
});
