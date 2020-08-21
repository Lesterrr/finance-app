import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Text from "../Text";

const WalletItemDescription = ({ description, mode, descriptionStyle }) => {
  return (
    <View style={styles.container}>
      {mode === "income" ? (
        <React.Fragment>
          <Text style={[styles.text, { color: "green", ...descriptionStyle }]}>
            {description}
          </Text>
          <MaterialIcons name="arrow-drop-up" size={24} color="green" />
        </React.Fragment>
      ) : mode === "expense" ? (
        <React.Fragment>
          <Text style={[styles.text, { color: "red", ...descriptionStyle }]}>
            {description}
          </Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="red" />
        </React.Fragment>
      ) : (
        <Text style={[styles.text, { ...descriptionStyle }]}>
          {description}
        </Text>
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
  },
});

export default WalletItemDescription;
