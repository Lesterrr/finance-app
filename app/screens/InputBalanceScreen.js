import React, { useState } from "react";
import { Text, View, Button, Switch, TextInput } from "react-native";
import { connect } from "react-redux";

import AppPicker from "../components/AppPicker";
import * as actions from "../store/actions/wallet";

const categories = [
  { id: 1, name: "Food", icon: "utensils" },
  { id: 2, name: "Transportation", icon: "plane" },
  { id: 3, name: "Shopping", icon: "shopping-cart" },
];

const InputBalanceScreen = ({ onAddIncome, onAddExpense }) => {
  const [isAddIncome, setIsAddIncome] = useState(true);
  const [value, setValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [description, setDescription] = useState(null);

  const submitValueHandler = () => {
    let data = {
      amount: parseFloat(value),
      category: selectedItem ? selectedItem.id : null,
      description: description,
    };

    if (isAddIncome) {
      data.mode = "INCOME";
      onAddIncome(data.amount, data);
    } else {
      data.mode = "EXPENSE";
      onAddExpense(data.amount, data);
    }
  };

  return (
    <View>
      <Text>{new Date().toDateString()}</Text>
      <View>
        <Text>{isAddIncome ? "INCOME" : "EXPENSE"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isAddIncome ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsAddIncome(!isAddIncome)}
          value={isAddIncome}
        />
      </View>
      <View>
        <Text>Amount : </Text>
        <TextInput
          onChangeText={(e) => setValue(e)}
          keyboardType={"numeric"}
          placeholder="Input Value"
        />
      </View>
      <AppPicker
        items={categories}
        selectedItem={selectedItem}
        onSelectItem={(e) => setSelectedItem(e)}
      />
      <View>
        <Text>Description : </Text>
        <TextInput
          onChangeText={(e) => setDescription(e)}
          placeholder="Description"
        />
      </View>
      <Button title="Confirm" onPress={submitValueHandler} />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIncome: (amount, activityData) =>
      dispatch(actions.addIncome(amount, activityData)),
    onAddExpense: (amount, activityData) =>
      dispatch(actions.addExpense(amount, activityData)),
  };
};

export default connect(null, mapDispatchToProps)(InputBalanceScreen);
