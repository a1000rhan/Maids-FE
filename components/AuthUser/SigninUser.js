import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  useToast,
  VStack,
  Text,
} from "native-base";
import React, { useState } from "react";

import COLORS from "./color";
import { StyleSheet, View } from "react-native";
import authStore from "../../store/userAuthStore";
import { observer } from "mobx-react";
import { RadioButton } from "react-native-paper";
import maidAuthStore from "../../store/maidAuthStore";

const SigninUser = ({ navigation }) => {
  const toast = useToast();

  const [checked, setChecked] = useState("user");

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    checked == "user"
      ? authStore.signInUser(user, navigation, toast)
      : maidAuthStore.signInMaid(user, navigation, toast);
  };

  return (
    <Center w="100%">
      <View style={styles.container}>
        <Heading>Sign in to continue!</Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={(value) => setUser({ ...user, username: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>

          <RadioButton.Group style={styles.checkboxContainer}>
            <View style={styles.checkbox}>
              <Text>
                <RadioButton
                  value="user"
                  status={checked === "user" ? "checked" : "unchecked"}
                  onPress={() => setChecked("user")}
                />
                User
              </Text>
            </View>
            <View style={styles.checkbox}>
              <Text>
                <RadioButton
                  value="maid"
                  status={checked === "maid" ? "checked" : "unchecked"}
                  onPress={() => setChecked("maid")}
                />
                Maid
              </Text>
            </View>
          </RadioButton.Group>

          <Button style={styles.btn} mt="2" onPress={handleSubmit}>
            Sign in
          </Button>
          <VStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
                marginLeft: 5,
              }}
            >
              New user ?{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 5,
                }}
                onPress={() => navigation.navigate("SignupUser")}
              >
                Sign Up
              </Text>
            </Text>

            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Forgot Your Password ?{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 5,
                }}
                onPress={() => navigation.navigate("ForgetPassword")}
              >
                Reset Password
              </Text>
            </Text>
          </VStack>
        </VStack>
      </View>
    </Center>
  );
};
export default observer(SigninUser);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "80%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
    margin: 10,
    elevation: 8,
  },
  btn: {
    backgroundColor: COLORS.main,
    height: 50,
    width: "100%",
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxContainer: { display: "flex", flexDirection: "row" },
  checkbox: {
    display: "flex",
    flexDirection: "row",
  },
});
