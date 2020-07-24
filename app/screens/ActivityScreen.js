import React from "react";
import { Text, View, FlatList, TouchableHighlight, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ActivityScreen = ({ route }) => {
  const data = route.params;
  if (data === null) {
    return;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
console.log("ACTIVITY SCREEN RENDERED");

const Item = ({ amount, date, category, description, isIncome }) => {
  const navigation = useNavigation();
  const showSettingsHandler = () => {
    Alert.alert(
      "Options",
      "What do you want to do?",
      [
        {
          text: "Delete",
          onPress: () => alert("Are you sure you want to delete?"),
        },
        {
          text: "Edit",
          onPress: () =>
            navigation.navigate("InputBalance", {
              amount,
              date,
              category,
              description,
              isIncome,
            }),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };
  return (
    <TouchableHighlight onLongPress={showSettingsHandler} underlayColor="white">
      <View>
        {amount ? <Text>{amount}</Text> : null}
        {date && <Text>{new Date(date).toString()}</Text>}
        {category && <Text>{category}</Text>}
        <Text>{isIncome ? "INCOME" : "EXPENSE"}</Text>
        {description && <Text>{description}</Text>}
      </View>
    </TouchableHighlight>
  );
};

export default ActivityScreen;
