import React from "react";
import { Text, Button } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import * as actions from "../store/actions/index";

const SettingsScreen = ({ navigation, isAuth, onAuthLogout }) => {
  return (
    <Screen>
      <Text>Settings Screen!</Text>
      {isAuth ? (
        <Button title="Logout" onPress={onAuthLogout} />
      ) : (
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      )}
    </Screen>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthLogout: () => dispatch(actions.authLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
