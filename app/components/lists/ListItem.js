import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../config/colors";

const ListItem = ({
  title,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  containerStyle,
  titleStyle,
  descriptionStyle,
  description,
  onLongPress,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View style={[styles.container, containerStyle]}>
          {IconComponent}
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
              <Text style={[styles.description, descriptionStyle]}>adsasd</Text>
            ) : (
              description
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  description: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
