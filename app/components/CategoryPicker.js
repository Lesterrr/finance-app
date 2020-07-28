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
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AppPicker = ({ items, selectedItem, onSelectItem }) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View>
          {selectedItem ? (
            <React.Fragment>
              <MaterialIcons name={selectedItem.icon} size={35} color="black" />
              <Text>{selectedItem.name}</Text>
            </React.Fragment>
          ) : (
            <Text>Select Category</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <React.Fragment>
              <MaterialIcons name={item.icon} size={35} color="black" />
              <Button
                title={item.name}
                onPress={() => {
                  onSelectItem(item);
                  setIsVisible(false);
                }}
              />
            </React.Fragment>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button
          title="Add Category"
          onPress={() => {
            navigation.navigate("CreateCategory");
            setIsVisible(false);
          }}
        />
        <Button title="Close" onPress={() => setIsVisible(false)} />
      </Modal>
    </React.Fragment>
  );
};

export default AppPicker;
