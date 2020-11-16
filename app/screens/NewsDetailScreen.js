import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

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

  // Links will be open using app browser.
  const handleLinkOpen = () => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <ScrollView>
      {/* Image */}
      {urlToImage && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: urlToImage }} />
        </View>
      )}

      {/* Texts */}
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={handleLinkOpen}>
          <Text
            style={
              urlToImage ? [styles.title] : [styles.title, { marginTop: 50 }]
            }
          >
            {title}
          </Text>
        </TouchableOpacity>
        <View style={styles.subTitle}>
          <Text style={styles.subTitleText}>{author}</Text>
          <Text style={styles.subTitleText}>{publishedAt}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{content}</Text>
        <Text style={styles.contentText}>
          {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
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
    fontSize: 18,
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
    paddingTop: 0,
  },
  contentText: {
    color: colors.medium,
    textAlign: "justify",
  },
});
