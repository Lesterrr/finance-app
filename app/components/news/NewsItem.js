import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Card from "../Card";

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
    <TouchableOpacity onPress={() => onPress(url)}>
      <Card
        title={title}
        description={content}
        image={
          urlToImage && {
            uri: urlToImage,
          }
        }
      />
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({});
