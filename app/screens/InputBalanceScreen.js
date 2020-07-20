import React, { useState } from "react";
import { Text, View, Button, Switch } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import AppPicker from "../components/AppPicker";
import * as actions from "../store/actions/wallet";
import { connect } from "react-redux";

const categories = [
  { id: 1, name: "Food", icon: "utensils" },
  { id: 2, name: "Transportation", icon: "plane" },
  { id: 3, name: "Shopping", icon: "shopping-cart" },
];

const InputBalanceScreen = ({ onAddIncome, onAddExpense }) => {
  const [isAddIncome, setIsAddIncome] = useState(true);
  const [value, setValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const changeValueHandler = (value) => {
    setValue(value);
  };

  const selectItemHandler = (item) => {
    setSelectedItem(item);
  };

  const submitValueHandler = () => {
    if (isAddIncome) {
      onAddIncome(parseFloat(value));
    } else {
      onAddExpense(parseFloat(value));
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
          onChangeText={changeValueHandler}
          keyboardType={"numeric"}
          placeholder="Input Value"
        />
      </View>
      <AppPicker
        items={categories}
        selectedItem={selectedItem}
        onSelectItem={selectItemHandler}
      />
      <View>
        <Text>Description : </Text>
        <TextInput
          onChangeText={() => console.log("Descripton Inpout")}
          placeholder="Description"
        />
      </View>
      <Button title="Confirm" onPress={submitValueHandler} />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIncome: (amount) => dispatch(actions.addIncome(amount)),
    onAddExpense: (amount) => dispatch(actions.addExpense(amount)),
  };
};

export default connect(null, mapDispatchToProps)(InputBalanceScreen);
