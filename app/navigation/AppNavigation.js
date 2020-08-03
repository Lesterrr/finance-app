import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import InputBalanceScreen from "../screens/InputBalanceScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="InputBalance" component={InputBalanceScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
