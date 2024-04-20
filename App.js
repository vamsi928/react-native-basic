import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";
import { PressableButton } from "./components/PressableButton";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const onDeleteItem = (item) => {
    let _goals = [...goals];
    let presentIndex = _goals.findIndex((goal) => goal.id === item.id);
    if (presentIndex !== -1) {
      _goals.splice(presentIndex, 1);
    }
    setGoals(_goals);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={{ marginTop: 48 }}>
          <PressableButton
            onPress={() => setShowModal(true)}
            title="Add Goal"
          />
        </View>
        <GoalInput
          goals={goals}
          setGoals={setGoals}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <GoalItem goals={goals} onDeleteItem={onDeleteItem} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 54,
    paddingHorizontal: 16,
    flex: 1,
  },
});
