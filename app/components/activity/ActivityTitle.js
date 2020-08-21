import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Text from "../Text";

const ActivityTitle = ({ title, isIncome }) => {
  return (
    <View style={styles.container}>
      {isIncome ? (
        <React.Fragment>
          <Text style={[{ color: "green" }, styles.text]}>{title}</Text>
          <MaterialIcons name="arrow-drop-up" size={24} color="green" />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Text style={[{ color: "red" }, styles.text]} t>
            {title}
          </Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="red" />
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ActivityTitle;
