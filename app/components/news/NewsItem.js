import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../Text";
import { paragraphTrimmer } from "../../util/paragraphTrimmer";

const NewsItem = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
  onPress,
}) => {
  const updatedTitle = paragraphTrimmer(title);
  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(url)}
      style={styles.container}
    >
      <View style={styles.main}>
        <View style={[styles.texts, urlToImage && { marginRight: 15 }]}>
          <Text style={styles.title}>{updatedTitle}</Text>
        </View>
        {urlToImage && (
          <View style={[styles.imageContainer]}>
            <Image
              source={{
                uri: urlToImage,
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        )}
      </View>
      <View style={styles.secondary}>
        <View style={styles.author}>
          <Text style={styles.secondaryText}>{author && author + " in "}</Text>
          <Text style={styles.secondaryText}>{source.name}</Text>
        </View>
        <View style={styles.icons}>
          <FontAwesome name="bookmark-o" size={18} color="black" />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={18}
            color="black"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 130,
    justifyContent: "space-between",
  },
  main: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: 75,
    height: 75,
  },
  texts: {
    flex: 1,
  },
  title: {
    lineHeight: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  secondary: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    alignSelf: "flex-end",
  },
  secondaryText: {
    color: "grey",
  },
  icons: {
    flexDirection: "row",
    width: 75,
    justifyContent: "space-around",
    alignSelf: "flex-end",
  },
});
