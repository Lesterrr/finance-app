import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory-native";

const BarChart = ({ income, expense }) => {
  return (
    <View>
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryBar style={{ data: { fill: "red" } }} data={expense} />
        <VictoryBar style={{ data: { fill: "green" } }} data={income} />
      </VictoryChart>
    </View>
  );
};

export default BarChart;

const styles = StyleSheet.create({});
