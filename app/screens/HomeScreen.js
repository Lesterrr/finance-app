import React from "react";
import { View, StyleSheet, FlatList, ScrollView, Image } from "react-native";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

import WalletItem from "../components/wallet/WalletItem";
import Text from "../components/Text";
import ActivityItem from "../components/activity/ActivityItem";
import Screen from "../components/Screen";
import Header from "../components/Header";

const HomeScreen = ({
  navigation,
  balance,
  totalIncome,
  totalExpenses,
  activity,
}) => {
  return (
    //   <View style={styles.container}>
    //     <View style={styles.walletContainer}>
    //       <View style={styles.main}>
    //         <WalletItem
    //           title="Balance"
    //           description={balance}
    //           onPress={() => navigation.navigate("Activity")}
    //           descriptionStyle={{ fontSize: 45 }}
    //           containerStyle={{ alignItems: "center" }}
    //         />
    //       </View>
    //       <View style={styles.secondary}>
    //         <View style={styles.secondaryItem}>
    //           <WalletItem
    //             title="Total Income"
    //             description={totalIncome}
    //             onPress={() => navigation.navigate("Activity", { key: "income" })}
    //             mode="income"
    //             descriptionStyle={{ fontSize: 20, textAlign: "center" }}
    //           />
    //         </View>
    //         <View style={styles.secondaryItem}>
    //           <WalletItem
    //             title="Total Expenses"
    //             description={totalExpenses}
    //             onPress={() =>
    //               navigation.navigate("Activity", { key: "expense" })
    //             }
    //             mode="expense"
    //             descriptionStyle={{ fontSize: 20, textAlign: "center" }}
    //           />
    //         </View>
    //       </View>
    //     </View>
    //     <View style={styles.activityContainer}>
    //       <Text>Transactions:</Text>
    //       <FlatList
    //         data={activity}
    //         renderItem={({ item }) => <ActivityItem {...item} />}
    //         keyExtractor={(_, index) => index.toString()}
    //       />
    //     </View>
    //     <ScrollView style={styles.menu} horizontal={true}>
    //       <View style={styles.menuItem}></View>
    //       <View style={styles.menuItem}></View>
    //       <View style={styles.menuItem}></View>
    //       <View style={styles.menuItem}></View>
    //       <View style={styles.menuItem}></View>
    //       <View style={styles.menuItem}></View>
    //       <View style={styles.menuItem}></View>
    //       <View style={styles.menuItem}></View>
    //       <View style={styles.menuItem}></View>
    //       <View style={styles.menuItem}></View>
    //     </ScrollView>
    //   </View>
    <Screen>
      <Header>
        <View style={styles.icon}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 50 }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
        </View>
        <View style={styles.icon}>
          <MaterialIcons name="notifications-none" size={24} color="black" />
        </View>
      </Header>
    </Screen>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 25,
    fontSize: 16,
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
