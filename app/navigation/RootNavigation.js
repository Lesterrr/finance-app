import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import InputBalanceScreen from "../screens/InputBalanceScreen";
import ActivityScreen from "../screens/ActivityScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Activity" component={ActivityScreen} />
      <Stack.Screen name="InputBalance" component={InputBalanceScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
