import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import Axios from "axios";

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
      .then((reponse) => {
        setNews(reponse.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={news}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ marginTop: 100 }} />}
        />
      )}
    </View>
  );
};

const Item = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => (
  <View>
    <Text>{title}</Text>
    <Image
      style={{ width: 100, height: 40 }}
      source={{
        uri: urlToImage,
      }}
    />
  </View>
);

export default NewsScreen;
