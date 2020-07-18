import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const data = {
  currency: "P",
  balance: "8,200",
  totalIncome: "12,312",
  totalExpenses: "42,312",
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Activity", { id: "Balance", data: "some data" })
        }
      >
        <Text>Balance</Text>
        <Text>
          {data.currency} {data.balance}
        </Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Activity", {
            id: "Total Incomes",
            data: "some data",
          })
        }
      >
        <Text>Total Incomes</Text>
        <Text>
          {data.currency} {data.totalIncome}
        </Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Activity", {
            id: "Total Expenses",
            data: "some data",
          })
        }
      >
        <Text>Total Expenses</Text>
        <Text>
          {data.currency} {data.totalExpenses}
        </Text>
      </TouchableWithoutFeedback>
      <Button title="$" onPress={() => navigation.navigate("InputBalance")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
