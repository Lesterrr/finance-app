import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ActivityScreen</Text>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
