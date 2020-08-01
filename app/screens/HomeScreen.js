import React from "react";
import { Button } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import WalletItem from "../components/wallet/WalletItem";

const HomeScreen = ({ navigation, balance, totalIncome, totalExpenses }) => {
  return (
    <Screen>
      <WalletItem
        title="Balance"
        description={balance}
        onPress={() => navigation.navigate("Activity")}
        containerStyle={{ backgroundColor: "none" }}
        mode="balance"
      />
      <WalletItem
        title="Total Income"
        description={totalIncome}
        onPress={() => navigation.navigate("Activity", { key: "income" })}
        containerStyle={{ backgroundColor: "none" }}
        mode="income"
      />
      <WalletItem
        title="Total Expenses"
        description={totalExpenses}
        onPress={() => navigation.navigate("Activity", { key: "expense" })}
        containerStyle={{ backgroundColor: "none" }}
        mode="expense"
      />
      <Button title="$" onPress={() => navigation.navigate("InputBalance")} />
    </Screen>
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
