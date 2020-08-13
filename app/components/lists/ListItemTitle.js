import React from "react";
import { StyleSheet } from "react-native";

import Text from "../Text";

const ListItemTitle = ({ title }) => {
  return (
    <Text style={styles.title} numberOfLines={1}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
  },
});

export default ListItemTitle;
