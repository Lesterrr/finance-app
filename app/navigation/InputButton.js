import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";

const InputButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome name="plus-circle" size={50} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InputButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    borderWidth: 10,
    borderColor: "white",
    bottom: 25,
    height: 80,
    width: 80,
  },
});
