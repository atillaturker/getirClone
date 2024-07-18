import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/home";
import Login from "../screens/login";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <HomeStackScreen />
    </NavigationContainer>
  );
}
