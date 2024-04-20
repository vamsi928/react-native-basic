import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

export const GoalItem = ({ goals, onDeleteItem }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <Pressable
              onPress={(e) => onDeleteItem(itemData.item)}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <View style={styles.goalText} onPres>
                <Text style={{ color: "#fff" }}>{itemData.item.goalText}</Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 4,
  },
  goalText: {
    backgroundColor: "#6c42f5",
    padding: 16,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#6c42f5",
    borderRadius: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
