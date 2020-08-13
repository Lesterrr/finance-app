import React from "react";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

import Text from "./Text";

const CardDescription = ({ description }) => {
  return (
    <Text style={styles.description} numberOfLines={2}>
      {description}
    </Text>
  );
};

export default CardDescription;

const styles = StyleSheet.create({
  description: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
