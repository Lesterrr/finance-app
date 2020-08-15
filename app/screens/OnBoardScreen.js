import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";

const OnBoardScreen = () => {
  return (
    <React.Fragment>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("../assets/onBoard/teaching-bw.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>This is a title</Text>
          <Text style={styles.description}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title="Get Started"
          onPress={() => console.log("Skip button was pressed!")}
        />
      </View>
    </React.Fragment>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    resizeMode: "cover",
    maxHeight: 300,
    width: "100%",
  },
  textContainer: {
    maxWidth: 300,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  description: {
    color: "grey",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
  },
});
