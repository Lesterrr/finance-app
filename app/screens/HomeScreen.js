import React from "react";
import { Text, View, Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { connect } from "react-redux";

const HomeScreen = ({
  navigation,
  balance,
  totalIncome,
  totalExpenses,
  activity,
}) => {
  console.log("HOME SCREEN RENDERED");

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Activity", [...activity])}
      >
        <Text>Balance</Text>
        <Text>{balance}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Activity", [...activity])}
      >
        <Text>Total Incomes</Text>
        <Text>{totalIncome}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Activity", [...activity])}
      >
        <Text>Total Expenses</Text>
        <Text>{totalExpenses}</Text>
      </TouchableWithoutFeedback>
      <Button title="$" onPress={() => navigation.navigate("InputBalance")} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    balance: state.wallet.balance,
    totalIncome: state.wallet.totalIncome,
    totalExpenses: state.wallet.totalExpenses,
    activity: state.wallet.activity,
  };
};

export default connect(mapStateToProps)(HomeScreen);
