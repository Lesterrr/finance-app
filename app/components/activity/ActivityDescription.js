import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Text from "../Text";

const ActivityDescription = ({ name, date, icon }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{date}</Text>
      <MaterialIcons name={icon} />
    </View>
  );
};

export default ActivityDescription;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
