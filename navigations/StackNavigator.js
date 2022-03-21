import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import MaidsList from "../components/Maids/MaidsList";
import DrawerNavigator from "./DrawerNavigator";
import MaidDetails from "../components/Maids/MaidDetails";

import SignUpMaid from "../components/AuthMaid/UserSignUpMaid";
import SkillsSignUpMaid from "../components/AuthMaid/SkillsSignUpMaid";
import NameSignUpMaid from "../components/AuthMaid/NameSignUpMaid";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
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
        component={NameSignUpMaid}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SkillsSignUpMaid"
        component={SkillsSignUpMaid}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
