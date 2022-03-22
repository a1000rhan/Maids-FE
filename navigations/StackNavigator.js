import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import MaidsList from "../components/Maids/MaidsList";
import DrawerNavigator from "./DrawerNavigator";
import MaidDetails from "../components/Maids/MaidDetails";

import SkillsSignUpMaid from "../components/AuthUser/SkillsSignUpMaid";
import NameSignUpMaid from "../components/AuthUser/NameSignUpMaid";

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
        name="Details"
        component={MaidDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NameSignUpMaid"
        options={{
          headerTitle: "Sign UP New Maid",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#6867AC",
          },
          headerTitleStyle: { color: "white" },
        }}
        component={NameSignUpMaid}
      />
      <Stack.Screen
        options={{
          headerTintColor: "white",
          headerTitle: "Sign UP New Maid",
          headerStyle: {
            backgroundColor: "#6867AC",
          },
          headerTitleStyle: { color: "white" },
        }}
        name="SkillsSignUpMaid"
        component={SkillsSignUpMaid}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
