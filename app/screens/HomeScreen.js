import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";

import WalletItem from "../components/wallet/WalletItem";
import Text from "../components/Text";
import ActivityItem from "../components/activity/ActivityItem";

const HomeScreen = ({
  navigation,
  balance,
  totalIncome,
  totalExpenses,
  activity,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.walletContainer}>
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
              onPress={() =>
                navigation.navigate("Activity", { key: "expense" })
              }
              mode="expense"
              descriptionStyle={{ fontSize: 20, textAlign: "center" }}
            />
          </View>
        </View>
      </View>
      <View style={styles.activityContainer}>
        <Text>Transactions:</Text>
        <FlatList
          data={activity}
          renderItem={({ item }) => <ActivityItem {...item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <ScrollView style={styles.menu} horizontal={true}>
        <View style={styles.menuItem}></View>
        <View style={styles.menuItem}></View>
        <View style={styles.menuItem}></View>
        <View style={styles.menuItem}></View>
        <View style={styles.menuItem}></View>
        <View style={styles.menuItem}></View>
        <View style={styles.menuItem}></View>
        <View style={styles.menuItem}></View>
        <View style={styles.menuItem}></View>
        <View style={styles.menuItem}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    height: 50,
    alignItems: "center",
  },
  walletContainer: {
    paddingTop: 30,
    paddingBottom: 50,
    alignItems: "center",
    backgroundColor: "#fdb32a",
  },
  activityContainer: {
    width: "90%",
    height: 250,
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "white",
    alignSelf: "center",
    marginHorizontal: 10,
    top: -30,
    padding: 10,
  },
  menu: {
    top: -12,
    marginHorizontal: 15,
  },
  menuItem: {
    width: 90,
    height: 120,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#fdb32a",
  },
});

const mapStateToProps = (state) => {
  return {
    activity: state.wallet.activity,
    balance: state.wallet.balance,
    totalIncome: state.wallet.totalIncome,
    totalExpenses: state.wallet.totalExpenses,
  };
};

export default connect(mapStateToProps)(HomeScreen);
