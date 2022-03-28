import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";
import "react-native-gesture-handler";
import * as Linking from "expo-linking";

export default function App() {
  const prefix = Linking.createURL("hh://");
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        ResetPassword: "reset",
        SignupUser: "signup",
      },
    },
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer linking={linking} fallback={<Text>Loading</Text>}>
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
