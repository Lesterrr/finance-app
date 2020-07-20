import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

const AppPicker = ({ items, selectedItem, onSelectItem }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View>
          {selectedItem ? (
            <Text>{selectedItem.name}</Text>
          ) : (
            <Text>Select Category</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              onPress={() => {
                onSelectItem(item);
                setIsVisible(false);
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button title="Close" onPress={() => setIsVisible(false)} />
      </Modal>
    </React.Fragment>
  );
};

export default AppPicker;

const styles = StyleSheet.create({});
