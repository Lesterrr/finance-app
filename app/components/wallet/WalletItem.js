import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";

import WalletItemDescription from "./WalletItemDescription";
import WalletItemTitle from "./WalletItemTitle";

const WalletItem = ({
  title,
  description,
  onPress,
  mode,
  containerStyle,
  descriptionStyle,
  WalletItemTitleComponent = WalletItemTitle,
  WalletItemDescriptionComponent = WalletItemDescription,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { ...containerStyle }]}>
        <WalletItemTitleComponent title={title} />
        <WalletItemDescriptionComponent
          description={description}
          mode={mode}
          descriptionStyle={descriptionStyle}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default WalletItem;
