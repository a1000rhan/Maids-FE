import React, { useState } from "react";
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
  CheckBox,
} from "native-base";
import { StyleSheet, View } from "react-native";

import { RadioButton } from "react-native-paper";

import COLORS from "../AuthUser/color";

import userAuthStore from "../../store/userAuthStore";
import { observer } from "mobx-react";

const SignupUser = ({ navigation }) => {
  const [checked, setChecked] = React.useState("user");

  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    address: "",
    fullName: "",
  });

  const handleSubmit = async () => {
    checked == "user"
      ? userAuthStore.signUpUser(user, navigation)
      : navigation.navigate("NameSignUpMaid", { user: user });
  };

  return (
    <Center w="100%">
      <View style={styles.container}>
        <Heading>Sign up to continue!</Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={(value) => setUser({ ...user, username: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="email"
              onChangeText={(value) => setUser({ ...user, email: value })}
            />
          </FormControl>
          <View style={{ display: checked == "user" ? "" : "none" }}>
            <FormControl>
              <FormControl.Label>Address</FormControl.Label>
              <Input
                type="text"
                onChangeText={(value) => setUser({ ...user, address: value })}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Full Name</FormControl.Label>
              <Input
                type="email"
                onChangeText={(value) => setUser({ ...user, fullName: value })}
              />
            </FormControl>
          </View>

          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(value) =>
                setUser({ ...user, confirmpassword: value })
              }
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
          <Button style={styles.btn} onPress={handleSubmit}>
            Next
          </Button>
          <HStack mt="6" justifyContent="center"></HStack>
        </VStack>
      </View>
    </Center>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "80%",
    height: "95%",
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
    height: 50,
    width: "100%",
    backgroundColor: COLORS.main,
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

  label: {
    margin: 8,
  },
});
export default observer(SignupUser);
