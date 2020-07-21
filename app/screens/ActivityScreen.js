import React from "react";
import { Text, View, FlatList } from "react-native";

const ActivityScreen = ({ route }) => {
  const data = route.params;
  if (data === null) {
    return;
  }
  console.log(data);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const Item = ({ amount, date, category, description, mode }) => {
  console.log("Test");
  return (
    <View>
      {amount ? <Text>{amount}</Text> : null}
      {date && <Text>{new Date(date).toString()}</Text>}
      {category && <Text>{category}</Text>}
      {mode && <Text>{mode}</Text>}
      {description && <Text>{description}</Text>}
    </View>
  );
};

export default ActivityScreen;
