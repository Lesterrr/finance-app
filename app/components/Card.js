import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../config/colors";
import CardDescription from "./CardDescription";
import CardTitle from "./CardTitle";

const Card = ({
  title,
  description,
  image,
  onPress,
  containerStyle,
  CardTitleComponent = CardTitle,
  CardDescriptionComponent = CardDescription,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, containerStyle]}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <CardTitleComponent title={title} />
          <CardDescriptionComponent description={description} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  description: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
