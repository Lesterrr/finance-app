import React from "react";
import { Text, View, FlatList, TouchableHighlight, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

const ActivityScreen = ({ route, data, navigation }) => {
  let newData = [];
  if (route.params && route.params.key === "income") {
    data.map((item) => item.isIncome && newData.push(item));
  } else if (route.params && route.params.key === "expense") {
    data.map((item) => !item.isIncome && newData.push(item));
  }

  const showSettingsHandler = (
    amount,
    date,
    category,
    description,
    isIncome
  ) => {
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
    <FlatList
      data={newData.length ? newData : data}
      renderItem={({ item }) => (
        <Item {...item} showSettingsHandler={showSettingsHandler} />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const Item = ({
  amount,
  date,
  category,
  description,
  isIncome,
  showSettingsHandler,
}) => {
  return (
    <TouchableHighlight
      onLongPress={() =>
        showSettingsHandler(amount, date, category, description, isIncome)
      }
      underlayColor="white"
    >
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

const mapStateToProps = (state) => {
  return {
    data: state.wallet.activity,
  };
};

export default connect(mapStateToProps)(ActivityScreen);
