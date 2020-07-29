import React, { useState, useEffect } from "react";
import { Text, View, Button, Switch, TextInput } from "react-native";
import { connect } from "react-redux";

import CategoryPicker from "../components/CategoryPicker";
import ErrorMessage from "../components/ErrorMessage";
import * as actions from "../store/actions";

const InputBalanceScreen = ({
  onAddIncome,
  onAddExpense,
  onUpdateActivity,
  categories,
  onDeleteCategory,
  onUpdateCategory,
  navigation,
  route,
}) => {
  const [isIncome, setIsIncome] = useState(true);
  const [amount, setAmount] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const [description, setDescription] = useState(null);
  const [isError, setIsError] = useState(false);

  console.log("Input Balance rendered");

  useEffect(() => {
    if (route.params) {
      const item = route.params;
      categories.map((category) =>
        item.category === category.id ? setSelectedItem(category) : null
      );
      setAmount(item.amount);
      setIsIncome(item.isIncome);
      setDescription(item.description);
    }
  }, [route.params]);

  const submitHandler = () => {
    if (parseFloat(amount) === 0 || !amount) {
      setIsError(true);
      return;
    }

    let data = {
      amount: parseFloat(amount),
      category: selectedItem ? selectedItem.id : null,
      description: description,
      isIncome: isIncome,
    };

    if (isIncome) {
      onAddIncome(data.amount, data);
    } else {
      onAddExpense(data.amount, data);
    }
    navigation.navigate("Home");
  };

  const updateHandler = () => {
    if (parseFloat(amount) === 0 || !amount) {
      setIsError(true);
      return;
    }

    let data = {
      amount: parseFloat(amount),
      category: selectedItem ? selectedItem.id : null,
      description: description,
      isIncome: isIncome,
      date: route.params.date,
    };

    const isModeChanged = isIncome !== route.params.isIncome;

    onUpdateActivity(data, route.params.amount, isModeChanged);
    navigation.navigate("Activity");
  };

  return (
    <View>
      <Text>{new Date().toDateString()}</Text>
      <View>
        <Text>{isIncome ? "INCOME" : "EXPENSE"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isIncome ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsIncome(!isIncome)}
          value={isIncome}
        />
      </View>
      <View>
        <Text>Amount : </Text>
        <TextInput
          onChangeText={(e) => setAmount(e)}
          keyboardType="numeric"
          placeholder="Amount"
          value={amount.toString()}
        />
        <ErrorMessage visible={isError} error="You need to input an amount" />
      </View>
      <CategoryPicker
        items={categories}
        selectedItem={selectedItem}
        onSelectItem={(e) => setSelectedItem(e)}
        onDeleteCategory={onDeleteCategory}
        onUpdateCategory={onUpdateCategory}
      />
      <View>
        <Text>Description : </Text>
        <TextInput
          onChangeText={(e) => setDescription(e)}
          placeholder="Description"
          value={description}
        />
      </View>
      {route.params ? (
        <Button title="Update" onPress={updateHandler} />
      ) : (
        <Button title="Confirm" onPress={submitHandler} />
      )}
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIncome: (amount, activityData) =>
      dispatch(actions.addIncome(amount, activityData)),
    onAddExpense: (amount, activityData) =>
      dispatch(actions.addExpense(amount, activityData)),
    onUpdateActivity: (activityData, prevAmount, isModeChanged) =>
      dispatch(actions.updateActivity(activityData, prevAmount, isModeChanged)),
    onDeleteCategory: (id) => dispatch(actions.deleteCategory(id)),
    onUpdateCategory: (categoryData) =>
      dispatch(actions.updateCategory(categoryData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputBalanceScreen);
