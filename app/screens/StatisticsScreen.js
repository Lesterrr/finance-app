import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

import Screen from "../components/Screen";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 11020 },
  { quarter: 6, earnings: 19000 },
  { quarter: 7, earnings: 31000 },
  { quarter: 8, earnings: 19000 },
  { quarter: 9, earnings: 19030 },
  { quarter: 10, earnings: 29000 },
  { quarter: 11, earnings: 1600 },
  { quarter: 12, earnings: 17000 },
  { quarter: 13, earnings: 12000 },
  { quarter: 14, earnings: 14000 },
  { quarter: 15, earnings: 12300 },
  { quarter: 16, earnings: 14100 },
  { quarter: 17, earnings: 1900 },
  { quarter: 18, earnings: 19000 },
  { quarter: 19, earnings: 19000 },
  { quarter: 20, earnings: 19000 },
  { quarter: 21, earnings: 19000 },
  { quarter: 22, earnings: 19000 },
  { quarter: 23, earnings: 19000 },
  { quarter: 24, earnings: 19000 },
  { quarter: 25, earnings: 19000 },
  { quarter: 26, earnings: 19000 },
  { quarter: 27, earnings: 19000 },
  { quarter: 28, earnings: 19000 },
  { quarter: 29, earnings: 4000 },
  { quarter: 30, earnings: 9000 },
  { quarter: 31, earnings: 29000 },
];

const StatisticsScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} barRatio={0.8} x="quarter" y="earnings" />
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

export default StatisticsScreen;
