import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CategoryPickerItem = ({ item, onPress, onLongPress }) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <MaterialIcons name={item.icon} size={35} color="black" />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;
