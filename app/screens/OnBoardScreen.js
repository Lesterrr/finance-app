import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";

import Button from "../components/Button";
import * as actions from "../store/actions";

const OnBoardScreen = ({ onGetStarted }) => {
  const [showPagination, setShowPagination] = useState(true);

  return (
    <Swiper
      loop={false}
      showsPagination={showPagination}
      onIndexChanged={(index) => index === 2 && setShowPagination(false)}
      scrollEnabled={showPagination}
    >
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("../assets/onBoard/save-money-bw.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Manage your savings digitally</Text>
          <Text style={styles.description}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("../assets/onBoard/analyse-bw.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>keep track on your spending habits</Text>
          <Text style={styles.description}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("../assets/onBoard/teaching-bw.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Learn how to grow your money</Text>
          <Text style={styles.description}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </Text>
        </View>
        <View style={styles.button}>
          <Button title="Get Started" onPress={onGetStarted} />
        </View>
      </View>
    </Swiper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetStarted: () => dispatch(actions.onGetStarted()),
  };
};

export default connect(null, mapDispatchToProps)(OnBoardScreen);

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
    fontSize: 25,
  },
  description: {
    color: "grey",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    width: 250,
    position: "absolute",
    bottom: 20,
  },
});
