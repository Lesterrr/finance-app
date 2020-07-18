import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ActivityScreen = ({ route }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({});
