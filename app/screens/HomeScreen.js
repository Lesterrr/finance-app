import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import WalletItem from "../components/wallet/WalletItem";

const HomeScreen = ({ navigation, balance, totalIncome, totalExpenses }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <WalletItem
          title="Balance"
          description={balance}
          onPress={() => navigation.navigate("Activity")}
          descriptionStyle={{ fontSize: 45 }}
          containerStyle={{ alignItems: "center" }}
        />
      </View>
      <View style={styles.secondary}>
        <View style={styles.secondaryItem}>
          <WalletItem
            title="Total Income"
            description={totalIncome}
            onPress={() => navigation.navigate("Activity", { key: "income" })}
            mode="income"
            descriptionStyle={{ fontSize: 20, textAlign: "center" }}
          />
        </View>
        <View style={styles.secondaryItem}>
          <WalletItem
            title="Total Expenses"
            description={totalExpenses}
            onPress={() => navigation.navigate("Activity", { key: "expense" })}
            mode="expense"
            descriptionStyle={{ fontSize: 20, textAlign: "center" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  main: {
    height: 150,
    justifyContent: "center",
  },
  secondary: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  secondaryItem: {
    width: "50%",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    balance: state.wallet.balance,
    totalIncome: state.wallet.totalIncome,
    totalExpenses: state.wallet.totalExpenses,
  };
};

export default connect(mapStateToProps)(HomeScreen);
