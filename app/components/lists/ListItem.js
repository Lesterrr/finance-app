import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import ListItemTitle from "./ListItemTitle";
import ListItemDescription from "./ListItemDescription";

const ListItem = ({
  title,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  containerStyle,
  description,
  ListItemTitleComponent = ListItemTitle,
  ListItemDescriptionComponent = ListItemDescription,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, containerStyle]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <ListItemTitleComponent title={title} />
            <ListItemDescriptionComponent description={description} />
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
});

export default ListItem;
