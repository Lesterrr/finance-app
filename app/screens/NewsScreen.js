import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import Axios from "axios";
import * as WebBrowser from "expo-web-browser";

import NewsItem from "../components/news/NewsItem";

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
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={news}
          renderItem={({ item }) => (
            <NewsItem {...item} onPress={handleLinkOpen} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default NewsScreen;
