import React from "react";
import { Text, View, Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { connect } from "react-redux";

const HomeScreen = ({
  navigation,
  balance,
  totalIncome,
  totalExpenses,
  incomeActivity,
  expenseActivity,
}) => {
  console.log("Home screen rendered");
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Activity", [
            ...incomeActivity,
            ...expenseActivity,
          ])
        }
      >
        <Text>Balance</Text>
        <Text>{balance}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Activity", [...incomeActivity])}
      >
        <Text>Total Incomes</Text>
        <Text>{totalIncome}</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Activity", [...expenseActivity])}
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
    incomeActivity: state.wallet.incomeActivity,
    expenseActivity: state.wallet.expenseActivity,
  };
};

export default connect(mapStateToProps)(HomeScreen);
