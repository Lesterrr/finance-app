import React from "react";
import { FlatList, Alert } from "react-native";
import { connect } from "react-redux";

import * as actions from "../store/actions";
import ActivityItem from "../components/activity/ActivityItem";

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
        <ActivityItem
          {...item}
          onLongPress={() => showSettingsHandler({ ...item })}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
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
