import React from "react";
import { StyleSheet, View } from "react-native";
import ActivityDescription from "./ActivityDescription";
import ListItem from "../lists/ListItem";
import ActivityTitle from "./ActivityTitle";

const ActivityItem = ({ amount, isIncome, category, date, onLongPress }) => {
  return (
    <View>
      <ListItem
        title={<ActivityTitle title={amount} isIncome={isIncome} />}
        description={
          <ActivityDescription
            category={category.name}
            date={`${new Date(date).getMonth()} / ${new Date(date).getDate()}`}
            icon={category.icon}
          />
        }
        onLongPress={onLongPress}
      />
    </View>
  );
};

export default ActivityItem;

const styles = StyleSheet.create({});
