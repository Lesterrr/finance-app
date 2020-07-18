import React from "react";
import { TouchableOpacity, Text } from "react-native";

const AppButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
