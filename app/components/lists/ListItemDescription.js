import React from "react";
import { StyleSheet } from "react-native";

import Text from "../Text";
import colors from "../../config/colors";

const ListItemDescription = ({ description }) => {
  return <Text style={styles.description}>{description}</Text>;
};

const styles = StyleSheet.create({
  description: {
    color: colors.medium,
  },
});

export default ListItemDescription;
