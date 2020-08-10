import React from "react";
import { View } from "react-native";
import { VictoryPie } from "victory-native";

const PieChart = ({ data }) => {
  return (
    <View>
      <VictoryPie data={data} />
    </View>
  );
};

export default PieChart;
