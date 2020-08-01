import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const WalletItemDescription = ({ description, mode }) => {
  return (
    <View style={styles.container}>
      {mode === "income" ? (
        <React.Fragment>
          <Text style={{ color: "green" }}>{description}</Text>
          <MaterialIcons name="arrow-drop-up" size={24} color="black" />
        </React.Fragment>
      ) : mode === "expense" ? (
        <React.Fragment>
          <Text style={{ color: "red" }} t>
            {description}
          </Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </React.Fragment>
      ) : (
        <Text>{description}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default WalletItemDescription;
