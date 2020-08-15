import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ActivityScreen from "../screens/ActivityScreen";
import CreateCategoryScreen from "../screens/CreateCategoryScreen";
import OnBoardScreen from "../screens/OnBoardScreen";
import AppNavigation from "./AppNavigation";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoard" headerMode="none">
      <Stack.Screen name="OnBoard" component={OnBoardScreen} />
      <Stack.Screen name="App" component={AppNavigation} />
      <Stack.Screen name="Activity" component={ActivityScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="CreateCategory" component={CreateCategoryScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
