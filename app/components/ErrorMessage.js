import React from "react";
import { StyleSheet } from "react-native";

import Text from "./Text";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <Text style={styles.text}>{error}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 15,
  },
});

export default ErrorMessage;
