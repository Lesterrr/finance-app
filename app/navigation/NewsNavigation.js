import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import NewsScreen from "../screens/NewsScreen";
import NewsDetailScreen from "../screens/NewsDetailScreen";

const Stack = createStackNavigator();

const NewsNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        // options={{
        //   headerTitle: false,
        //   headerTransparent: true,
        //   ...TransitionPresets.SlideFromRightIOS,
        // }}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigation;
