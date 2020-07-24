import React from "react";
import { Text, View, Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { connect } from "react-redux";

const HomeScreen = ({ navigation, balance, totalIncome, totalExpenses }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Activity")}>
        <Text>Balance</Text>
        <Text>{balance}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Activity", { key: "income" })}
      >
        <Text>Total Incomes</Text>
        <Text>{totalIncome}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Activity", { key: "expense" })}
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
  };
};

export default connect(mapStateToProps)(HomeScreen);
