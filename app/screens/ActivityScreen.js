import React from "react";
import { Text, View, FlatList, TouchableHighlight, Alert } from "react-native";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

import * as actions from "../store/actions";
import ListItem from "../components/lists/ListItem";

const ActivityScreen = ({ route, data, navigation, onDeleteActivity }) => {
  let newData = [];
  if (route.params && route.params.key === "income") {
    data.map((item) => item.isIncome && newData.push(item));
  } else if (route.params && route.params.key === "expense") {
    data.map((item) => !item.isIncome && newData.push(item));
  }

  const deleteHandler = (id, amount, isIncome) => {
    onDeleteActivity(id, amount, isIncome);
  };

  const showSettingsHandler = ({
    amount,
    date,
    category,
    description,
    isIncome,
  }) => {
    Alert.alert(
      "Options",
      "What do you want to do?",
      [
        {
          text: "Delete",
          onPress: () => deleteHandler(date, amount, isIncome),
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
        <ListItem
          title={item.amount}
          subTitle={`${new Date(item.date)} ${item.category.name} ${
            item.description
          }`}
          onPress={() => showSettingsHandler(item)}
        />
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
        {amount ? (
          <Text style={{ color: isIncome ? "green" : "red" }}>{amount}</Text>
        ) : null}
        {date && (
          <Text style={{ color: isIncome ? "green" : "red" }}>
            {new Date(date).toString()}
          </Text>
        )}
        {category && (
          <MaterialIcons
            name={category.icon}
            size={35}
            color={isIncome ? "green" : "red"}
          />
        )}
        {description && (
          <Text style={{ color: isIncome ? "green" : "red" }}>
            {description}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.wallet.activity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteActivity: (id, amount, isIncome) =>
      dispatch(actions.deleteActivity(id, amount, isIncome)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityScreen);
