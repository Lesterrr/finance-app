import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import PieChart from "../components/charts/PieChart";
import Button from "../components/Button";

const StatisticsScreen = ({ activities }) => {
  const [isIncome, setIsIncome] = useState(false);

  let data = [];
  if (isIncome) {
    activities.map((item) => {
      item.isIncome && data.push({ x: item.category.name, y: item.amount });
    });
  } else {
    activities.map((item) => {
      !item.isIncome && data.push({ x: item.category.name, y: item.amount });
    });
  }

  let pieData = [];
  data.forEach((item) => {
    let index = pieData.findIndex((element) => {
      if (element[Object.keys(element)[0]] === item[Object.keys(item)[0]])
        return true;
    });
    if (index === -1) {
      pieData.push(item);
    } else {
      pieData[index] = {
        [Object.keys(item)[0]]: item[Object.keys(item)[0]],
        [Object.keys(item)[1]]: item[Object.keys(item)[1]] + pieData[index].y,
      };
    }
  });

  return (
    <Screen>
      <Button
        onPress={() => setIsIncome(!isIncome)}
        title={isIncome ? "INCOME" : "EXPENSE"}
      />
      <View style={styles.container}>
        <PieChart data={pieData} />
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
