import React from "react";
import { View } from "react-native";

import ListItem from "../lists/ListItem";
import WalletItemDescription from "./WalletItemDescription";

const WalletItem = ({ title, description, onPress, mode }) => {
  return (
    <View>
      <ListItem
        title={title}
        description={
          <WalletItemDescription description={description} mode={mode} />
        }
        onPress={onPress}
        containerStyle={{ backgroundColor: "none" }}
      />
    </View>
  );
};

export default WalletItem;
