import React from "react";
import { View } from "react-native";

import ListItem from "../lists/ListItem";
import WalletItemDescription from "./WalletItemDescription";

const WalletItem = ({ title, description, onPress, onLongPress, mode }) => {
  return (
    <View>
      <ListItem
        title={title}
        description={
          <WalletItemDescription description={description} mode={mode} />
        }
        onPress={onPress}
        onLongPress={onLongPress}
        containerStyle={{ backgroundColor: "none" }}
      />
    </View>
  );
};

export default WalletItem;
