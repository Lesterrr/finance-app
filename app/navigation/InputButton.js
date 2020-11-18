import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";

const InputButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome name="plus-circle" size={35} color="white" />
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
    height: 36,
    width: 36,
    margin: 5,
  },
});
