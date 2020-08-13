import React from "react";
import { StyleSheet } from "react-native";

import Text from "./Text";

const CardTitle = ({ title }) => {
  return (
    <Text style={styles.title} numberOfLines={1}>
      {title}
    </Text>
  );
};

export default CardTitle;

const styles = StyleSheet.create({
  title: {
    marginBottom: 7,
  },
});
