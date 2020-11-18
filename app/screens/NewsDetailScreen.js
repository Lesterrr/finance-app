import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NewsDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NewsDetailScreen</Text>
    </View>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
