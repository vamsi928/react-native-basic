import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export const PressableButton = ({
  title = "",
  onPress = () => undefined,
  btnColor = "#6c42f5",
  btnTextColor = "#fff",
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={{ ...styles.addBtn, backgroundColor: btnColor }}>
        <Text style={{ ...styles.addBtnText, color: btnTextColor }}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    padding: 16,
    borderRadius: 6,
    minWidth: 150,
  },
  addBtnText: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.5,
  },
});
