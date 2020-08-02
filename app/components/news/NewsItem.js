import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../Text";
import Card from "../Card";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        title={
          <View>
            <Text style={{ color: "red" }}>{title}</Text>
          </View>
        }
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
