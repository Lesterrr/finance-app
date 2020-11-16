import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

const NewsDetailScreen = ({ route }) => {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
    onPress,
  } = route.params;
  return (
    <ScrollView>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: urlToImage }} />
      </View>
      {/* Texts */}

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subTitle}>
          <Text style={styles.subTitleText}>{author}</Text>
          <Text style={styles.subTitleText}>{publishedAt}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  textContainer: {
    padding: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
  },
  subTitle: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTitleText: {
    color: colors.secondary,
  },
  content: {
    padding: 25,
  },
  contentText: {
    color: colors.medium,
    textAlign: "justify",
  },
});
