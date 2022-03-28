import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
} from "native-base";
import userAuthStore from "../../store/userAuthStore";
import COLORS from "./color";
import { StyleSheet } from "react-native";

export const ResetPassword = ({ navigation }) => {
  // in your view you provide a form to set the new password
  const [password, setNewPassword] = useState({
    newPass: "",
    resetLink: "",
  });

  const onButtonPress = async () => {
    await userAuthStore.resetPassword(password);
    if (userAuthStore.resetPassword) navigation.navigate("SignInUser");
  };

  return (
    <Center w="100%" style={style.signWrapper}>
      <Box safeArea p="10" py="12" w="90%" maxW="400">
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="md"
        >
          Reset Your Password
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>New Password</FormControl.Label>
            <Input
              onChangeText={(value) =>
                setNewPassword({ ...password, newPass: value })
              }
              type="password"
              placeholder="Enter Your New Password"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Token</FormControl.Label>
            <Input
              onChangeText={(value) =>
                setNewPassword({ ...password, resetLink: value })
              }
              type="token"
              placeholder="Enter Your Token"
            />
          </FormControl>
          <Button style={style.btn} mt="2" onPress={onButtonPress}>
            Submit
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default ResetPassword;
const style = StyleSheet.create({
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
});
