import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AppPicker = ({ items, selectedItem, onSelectItem }) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const onDeleteCategoryHandler = (id) => {
    console.log(id);
  };
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
          contentContainerStyle={styles.container}
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onSelectItem(item);
                setIsVisible(false);
              }}
              onLongPress={() =>
                Alert.alert(
                  "Delete",
                  "Are you sure?",
                  onDeleteCategoryHandler(item.id)
                )
              }
            >
              <View style={styles.categoryItem}>
                <MaterialIcons name={item.icon} size={35} color="black" />
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  categoryItem: {
    padding: 10,
  },
});
