import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Text from "./Text";
import colors from "../config/colors";

const Card = ({
  title,
  description,
  image,
  onPress,
  containerStyle,
  titleStyle,
  descriptionStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, containerStyle]}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          {title && typeof title === "string" ? (
            <Text style={[styles.title, titleStyle]} numberOfLines={1}>
              {title}
            </Text>
          ) : (
            title
          )}
          {description && typeof description === "string" ? (
            <Text
              style={[styles.description, descriptionStyle]}
              numberOfLines={2}
            >
              {description}
            </Text>
          ) : (
            description
          )}
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
