import React from "react";
import { StyleSheet, View } from "react-native";

const Header = ({ children, style }) => {
  return <View style={[styles.header, style]}>{children}</View>;
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
