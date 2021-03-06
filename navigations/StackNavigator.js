import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import MaidsList from "../components/Maids/MaidsList";
import DrawerNavigator from "./DrawerNavigator";
import MaidDetails from "../components/Maids/MaidDetails";
import SkillsSignUpMaid from "../components/AuthUser/SkillsSignUpMaid";
import NameSignUpMaid from "../components/AuthUser/NameSignUpMaid";
import { observer } from "mobx-react";
import ForgetPassword from "../components/AuthUser/ForgetPassword";
import ResetPassword from "../components/AuthUser/ResetPassword";

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
      <Stack.Screen
        name="ForgetPassword"
        options={{ headerShown: false }}
        component={ForgetPassword}
      />
      <Stack.Screen
        name="ResetPassword"
        options={{ headerShown: false }}
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
};

export default observer(StackNavigator);

const styles = StyleSheet.create({});
