import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const InputBalanceScreen = () => {
  const [value, setValue] = useState(0);

  const changeTextHandler = (value) => {
    setValue(value);
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
      <View>
        <Text>Category : </Text>
        <TextInput
          onChangeText={() => console.log("Category Inpout")}
          placeholder="Category"
        />
      </View>
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
