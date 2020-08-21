import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import ActivityDescription from "./ActivityDescription";
import ActivityTitle from "./ActivityTitle";

const ActivityItem = ({ amount, isIncome, category, date, onLongPress }) => {
  const { name, icon } = category;
  return (
    <TouchableOpacity onLongPress={onLongPress}>
      <View style={styles.container}>
        <ActivityTitle title={amount} isIncome={isIncome} />
        <ActivityDescription
          date={`${new Date(date).getMonth()} / ${new Date(date).getDate()}`}
          icon={icon}
          name={name}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default ActivityItem;
