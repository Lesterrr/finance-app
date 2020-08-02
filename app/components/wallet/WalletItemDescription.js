import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Text from "../Text";

const WalletItemDescription = ({ description, mode }) => {
  return (
    <View style={styles.container}>
      {mode === "income" ? (
        <React.Fragment>
          <Text style={[{ color: "green" }, styles.text]}>{description}</Text>
          <MaterialIcons name="arrow-drop-up" size={24} color="green" />
        </React.Fragment>
      ) : mode === "expense" ? (
        <React.Fragment>
          <Text style={[{ color: "red" }, styles.text]}>{description}</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="red" />
        </React.Fragment>
      ) : (
        <Text style={styles.text}>{description}</Text>
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

export default WalletItemDescription;
