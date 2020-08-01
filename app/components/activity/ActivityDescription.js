import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ActivityDescription = ({ date, category, icon }) => {
  return (
    <View style={styles.container}>
      <Text>{date}</Text>
      <Text>{category}</Text>
      <MaterialIcons name={icon} />
    </View>
  );
};

export default ActivityDescription;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
