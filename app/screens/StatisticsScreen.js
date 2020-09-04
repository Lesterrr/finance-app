import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import PieChart from "../components/charts/PieChart";
import BarChart from "../components/charts/BarChart";
import Button from "../components/Button";
import { reducer } from "../util/reducer";

const StatisticsScreen = ({ activities }) => {
  const [isIncome, setIsIncome] = useState(false);
  let barIncomeData = [];
  let barExpenseData = [];
  let days = 12; // Days you want to subtract
  let date = new Date();
  let last = new Date(date.getTime() - (days - 1) * 24 * 60 * 60 * 1000);

  const lastDate = new Date(
    last.getMonth() + 1 + "/" + last.getDate() + "/" + last.getFullYear()
  );

  activities.map((item) => {
    if (item.date >= lastDate) {
      if (item.isIncome) {
        barIncomeData.push({
          x: new Date(item.date).getDate(),
          y: item.amount,
        });
        barExpenseData.push({
          x: new Date(item.date).getDate(),
          y: 0,
        });
      } else {
        barIncomeData.push({
          x: new Date(item.date).getDate(),
          y: 0,
        });
        barExpenseData.push({
          x: new Date(item.date).getDate(),
          y: item.amount,
        });
      }
    }
  });
  barIncomeData = reducer(barIncomeData);
  barExpenseData = reducer(barExpenseData);
  console.log("Bar Income", barIncomeData);
  console.log("Bar Expense", barExpenseData);

  let pieData = [];
  // format [{x: "transpo", y: 1}, {x: "savings", y: 2}, {x: "transpo", y: 21}]
  if (isIncome) {
    activities.map((item) => {
      item.isIncome && pieData.push({ x: item.category.name, y: item.amount });
    });
  } else {
    activities.map((item) => {
      !item.isIncome && pieData.push({ x: item.category.name, y: item.amount });
    });
  }

  pieData = reducer(pieData);

  return (
    <Screen>
      <Button
        onPress={() => setIsIncome(!isIncome)}
        title={isIncome ? "INCOME" : "EXPENSE"}
      />
      <View style={styles.container}>
        <PieChart data={pieData} />
        <BarChart income={barIncomeData} expense={barExpenseData} />
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
