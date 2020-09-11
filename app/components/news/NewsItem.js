import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Text from "../Text";

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
  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(url)}
      style={styles.container}
    >
      {urlToImage && (
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: urlToImage,
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      )}
      <View style={styles.texts}>
        <Text style={styles.description}>{title}</Text>
        <Text style={styles.author}>
          {author && author + " in "}
          {source.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 100,
    flexWrap: "wrap",
  },
  imageContainer: {
    width: 110,
    height: 100,
    paddingRight: 15,
  },
  texts: {
    flex: 1,
    justifyContent: "space-between",
  },
  description: {
    lineHeight: 20,
  },
  author: {
    fontWeight: "bold",
  },
});
