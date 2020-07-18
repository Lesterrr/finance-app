import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
