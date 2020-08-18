import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ActivityScreen from "../screens/ActivityScreen";
import CreateCategoryScreen from "../screens/CreateCategoryScreen";
import OnBoardScreen from "../screens/OnBoardScreen";
import AppNavigation from "./AppNavigation";

const Stack = createStackNavigator();

const RootNavigation = ({ isFirstTime }) => {
  return (
    <Stack.Navigator headerMode="none" mode="card">
      {isFirstTime ? (
        <Stack.Screen name="OnBoard" component={OnBoardScreen} />
      ) : (
        <React.Fragment>
          <Stack.Screen name="App" component={AppNavigation} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="CreateCategory"
            component={CreateCategoryScreen}
          />
        </React.Fragment>
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    isFirstTime: state.app.showOnBoard,
  };
};

export default connect(mapStateToProps)(RootNavigation);
