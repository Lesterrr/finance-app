import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";

const AppButton = ({ title, onPress, color = "dark" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 100,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});

export default AppButton;
