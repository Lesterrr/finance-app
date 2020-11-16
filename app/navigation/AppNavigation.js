import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import InputBalanceScreen from "../screens/InputBalanceScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import colors from "../config/colors";
import InputButton from "./InputButton";
import NewsNavigation from "./NewsNavigation";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // showLabel: false,
        inactiveTintColor: colors.black,
        keyboardHidesTabBar: true,
      }}
      lazy={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="bar-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="InputBalance"
        component={InputBalanceScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <InputButton onPress={() => navigation.navigate("InputBalance")} />
          ),
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="plus-circle" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="News"
        component={NewsNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="gears" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
