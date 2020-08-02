import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import * as actions from "../store/actions/category";
import Icons from "../constants/Icons";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const CreateCategoryScreen = ({
  route,
  onAddCategory,
  onUpdateCategory,
  navigation,
}) => {
  const [icon, setIcon] = useState("attach-money");
  const [name, setName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (route.params) {
      const category = route.params;
      setIcon(category.icon);
      setName(category.name);
    }
  }, [route.params]);

  const changeIconHandler = (icon) => {
    setIcon(icon);
  };

  const changeTextHandler = (value) => {
    setName(value);
  };

  const submitHandler = () => {
    if (!name) {
      setIsError(true);
      return;
    }
    let id = new Date().getTime();
    onAddCategory({ id, icon, name });
    navigation.navigate("InputBalance");
  };

  const updateHandler = () => {
    if (!name) {
      setIsError(true);
      return;
    }
    let id = route.params.id;
    onUpdateCategory({ id, icon, name });
    navigation.navigate("InputBalance");
  };

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <MaterialIcons name={icon} size={24} color="black" />
      </TouchableWithoutFeedback>
      <TextInput
        placeholder="Category Name"
        value={name}
        onChangeText={changeTextHandler}
      />
      <ErrorMessage error="Can not have a blank name" visible={isError} />
      {route.params ? (
        <Button title="Update" onPress={updateHandler} />
      ) : (
        <Button title="Confirm" onPress={submitHandler} />
      )}

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.container}>
          {Icons.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  changeIconHandler(item);
                  setModalVisible(false);
                }}
              >
                <MaterialIcons name={item} size={35} color="black" />
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <Button title="close" onPress={() => setModalVisible(false)} />
      </Modal>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategory: (data) => dispatch(actions.addCategory(data)),
    onUpdateCategory: (data) => dispatch(actions.updateCategory(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryScreen);
