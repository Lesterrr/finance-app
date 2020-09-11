import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import Axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import NewsItem from "../components/news/NewsItem";
import Screen from "../components/Screen";
import Text from "../components/Text";

const NewsScreen = () => {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=ph&" +
      "category=business&" +
      "apiKey=275f3c5775a9496c8e9897b826685367";
    Axios.get(url)
      .then((response) => {
        setNews(response.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const handleLinkOpen = (url) => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <Screen>
      <View style={styles.header}>
        <FontAwesome
          name="search"
          size={24}
          color="black"
          style={styles.icon}
        />
        <FontAwesome
          name="bookmark"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
      <View style={styles.featured}>
        <Text style={styles.featuredTitle}>FEARURED</Text>
        <Text style={styles.featuredDescription}>
          Lorem ipsum dolor sit amet, conse adipisicing.
        </Text>
      </View>
      <View style={styles.listsContainer}>
        <Text>TODAY</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.lists}>
            <FlatList
              data={news}
              renderItem={({ item }) => (
                <NewsItem {...item} onPress={handleLinkOpen} />
              )}
              keyExtractor={(_, index) => index.toString()}
              ItemSeparatorComponent={() => (
                <View style={styles.listsSeparator} />
              )}
            />
          </View>
        )}
      </View>
    </Screen>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    padding: 25,
    fontSize: 16,
  },
  featured: {
    maxWidth: "100%",
    height: 250,
    backgroundColor: "#FDFDBC",
    justifyContent: "space-between",
    padding: 25,
  },
  featuredTitle: {
    fontWeight: "bold",
  },
  featuredDescription: {
    fontSize: 20,
    lineHeight: 25,
  },
  listsContainer: {
    padding: 25,
  },
  lists: {
    marginTop: 25,
  },
  listsSeparator: {
    height: 25,
  },
});
