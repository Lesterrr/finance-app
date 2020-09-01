import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import PieChart from "../components/charts/PieChart";
import Button from "../components/Button";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory-native";

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
        <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            data={[
              { x: 1, y: 12 },
              { x: 2, y: 13 },
              { x: 3, y: 15 },
              { x: 4, y: 44 },
              { x: 5, y: 31 },
              { x: 6, y: 31 },
              { x: 7, y: 31 },
              { x: 8, y: 31 },
              { x: 9, y: 31 },
              { x: 10, y: 31 },
              { x: 11, y: 31 },
              { x: 12, y: 31 },
            ]}
          />
          <VictoryBar
            style={{ data: { fill: "green" } }}
            data={[
              { x: 1, y: 0 },
              { x: 2, y: 23 },
              { x: 3, y: 5 },
              { x: 4, y: 14 },
              { x: 5, y: 3 },
              { x: 6, y: 3 },
              { x: 7, y: 1 },
              { x: 8, y: 3 },
              { x: 9, y: 21 },
              { x: 10, y: 41 },
              { x: 11, y: 1 },
              { x: 12, y: 13 },
            ]}
          />
        </VictoryChart>
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
