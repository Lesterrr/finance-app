import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import AppPicker from "../components/AppPicker";

const categories = [
  { id: 1, name: "Food", icon: "utensils" },
  { id: 2, name: "Transportation", icon: "plane" },
  { id: 3, name: "Shopping", icon: "shopping-cart" },
];

const InputBalanceScreen = () => {
  const [value, setValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const changeTextHandler = (value) => {
    setValue(value);
  };

  const selectItemHandler = (item) => {
    setSelectedItem(item);
  };

  return (
    <View>
      <Text>{new Date().toDateString()}</Text>
      <View>
        <Button title="Income" onPress={() => console.log("Income")} />
        <Button title="Expense" onPress={() => console.log("Expense")} />
      </View>
      <View>
        <Text>Amount : </Text>
        <TextInput
          onChangeText={changeTextHandler}
          keyboardType={"numeric"}
          value={value.toString()}
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
      <Button title="Confirm" onPress={() => console.log("Added", value)} />
    </View>
  );
};

export default InputBalanceScreen;

const styles = StyleSheet.create({});
