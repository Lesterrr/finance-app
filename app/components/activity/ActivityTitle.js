import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

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
  },
  text: {
    fontWeight: "bold",
  },
});

export default ActivityTitle;
