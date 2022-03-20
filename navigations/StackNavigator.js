import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import MaidsList from "../components/Maids/MaidsList";
import DrawerNavigator from "./DrawerNavigator";
import MaidDetails from "../components/Maids/MaidDetails";
import Signup from "../components/Auth/Signup";
import Signin from "../components/Auth/Signin";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="List"
        options={{ headerShown: false }}
        component={DrawerNavigator}
      />
      <Stack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={DrawerNavigator}
      />
      <Stack.Screen
        name="Details"
        component={MaidDetails}
        options={{ headerShown: false }}
      />
 
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
