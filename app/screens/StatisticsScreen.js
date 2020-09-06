import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { reducer } from "../util/reducer";

import Screen from "../components/Screen";
import PieChart from "../components/charts/PieChart";
import BarChart from "../components/charts/BarChart";
import Button from "../components/Button";

// const get12DaysBarChartData = (array, lastDate) => {
//   let output = [];
//   let i = 0;
//   for (let index = 0; index < 12; index++) {
//     if (array[i]) {
//       if (array[i].x === lastDate.getDate()) {
//         output.push(array[i]);
//         i++;
//       } else {
//         output.push({ x: lastDate.getDate(), y: 0 });
//       }
//       lastDate.setDate(lastDate.getDate() + 1);
//     } else {
//       output.push({ x: lastDate.getDate(), y: 0 });
//       lastDate.setDate(lastDate.getDate() + 1);
//     }
//   }
//   return output;
// };

const updateBarData = (barData, lastDate) => {
  let x = 0;
  let newArr = [];
  for (let index = 1; index < lastDate; index++) {
    if (barData[x]) {
      if (barData[x].x === index) {
        newArr.push({ ...barData[x] });
        x++;
      } else {
        newArr.push({ x: index, y: 0 });
      }
    } else {
      newArr.push({ x: index, y: 0 });
    }
  }
  return newArr;
};

const StatisticsScreen = ({ activities }) => {
  const [isIncome, setIsIncome] = useState(false);
  let barIncomeData = [];
  let barExpenseData = [];

  const firstDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const lastDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  );

  activities.map((item) => {
    if (item.date >= firstDate && item.date <= lastDate) {
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
  barIncomeData = updateBarData(reducer(barIncomeData), lastDate.getDate());
  barExpenseData = updateBarData(reducer(barExpenseData), lastDate.getDate());

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
