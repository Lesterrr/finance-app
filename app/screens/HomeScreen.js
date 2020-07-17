import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = {
  currency: "P",
  balance: "8,200",
  totalIncome: "12,312",
  totalExpenses: "42,312",
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Balance</Text>
      <Text>
        {data.currency} {data.balance}
      </Text>
      <Text>Total Income</Text>
      <Text>
        {data.currency} {data.totalIncome}
      </Text>
      <Text>Total Expenses</Text>
      <Text>
        {data.currency} {data.totalExpenses}
      </Text>
      <Button title="$" onPress={() => navigation.navigate("InputBalance")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
