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

const SigninUser = ({ navigation }) => {
  const toast = useToast();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    authStore.signInUser(user, navigation, toast);
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
          <Button style={styles.btn} mt="2" onPress={handleSubmit}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
              onPress={() => navigation.navigate("SignupUser")}
            >
              Sign Up
            </Text>
          </HStack>
        </VStack>
      </View>
    </Center>
  );
};

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
});

export default observer(SigninUser);
