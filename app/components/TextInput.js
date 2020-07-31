import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import defaultStyles from "../config/styles";

const AppTextInput = ({ width = "100%", ...otherProps }) => {
  return (
    <View style={([styles.container], { width })}>
      <TextInput
        {...otherProps}
        styles={defaultStyles.text}
        placeholderTextColor={defaultStyles.colors.medium}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
});
