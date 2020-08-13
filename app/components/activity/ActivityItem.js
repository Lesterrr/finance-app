import React from "react";
import { View } from "react-native";

import ActivityDescription from "./ActivityDescription";
import ListItem from "../lists/ListItem";
import ActivityTitle from "./ActivityTitle";

const ActivityItem = ({ amount, isIncome, category, date, onLongPress }) => {
  const { name, icon } = category;
  return (
    <View>
      <ListItem
        ListItemTitleComponent={ActivityTitle}
        ListItemDescriptionComponent={ActivityDescription}
        titleProps={{ title: amount, isIncome }}
        descriptionProps={{
          name,
          date: `${new Date(date).getMonth()} / ${new Date(date).getDate()}`,
          icon,
        }}
        onLongPress={onLongPress}
      />
    </View>
  );
};

export default ActivityItem;
