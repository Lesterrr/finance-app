import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import PieChart from "../components/charts/PieChart";
import { connect } from "react-redux";

const StatisticsScreen = ({ activities, categories }) => {
  let data = [];
  activities.map((item) => {
    !item.isIncome && data.push({ x: item.category.name, y: item.amount });
  });

  let finalData = [];
  data.forEach((item) => {
    let index = finalData.findIndex((element) => {
      if (element[Object.keys(element)[0]] === item[Object.keys(item)[0]])
        return true;
    });
    if (index === -1) {
      finalData.push(item);
    } else {
      finalData[index] = {
        [Object.keys(item)[0]]: item[Object.keys(item)[0]],
        [Object.keys(item)[1]]: item[Object.keys(item)[1]] + finalData[index].y,
      };
    }
  });

  return (
    <Screen>
      <View style={styles.container}>
        <PieChart data={data} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});

const mapStateToProps = (state) => {
  return {
    activities: state.wallet.activity,
    categories: state.category.categories,
  };
};

export default connect(mapStateToProps)(StatisticsScreen);
