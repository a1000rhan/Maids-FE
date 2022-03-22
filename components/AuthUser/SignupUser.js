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
  View,
  CheckBox,
} from "native-base";
import { StyleSheet } from "react-native";

import { RadioButton } from "react-native-paper";

import COLORS from "../AuthUser/color";

import userAuthStore from "../../store/userAuthStore";

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
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>

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
      </Box>
    </Center>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.main,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
export default SignupUser;
