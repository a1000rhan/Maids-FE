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
import React from "react";
import { useState } from "react";
import COLORS from "./color";
import { StyleSheet } from "react-native";
import UserAuthStore from "../../store/userAuthStore";
import { observer } from "mobx-react";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState({
    email: "",
  });
  const handleSubmit = async () => {
    await UserAuthStore.forgotPassword(email);
    if (UserAuthStore.forgotPassword) navigation.replace("List");
  };
  return (
    <Center w="100%">
      <Box safeArea p="10" py="12" w="90%" maxW="290">
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Reset your password !
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              borderWidth={1}
              borderColor="#712B75"
              onChangeText={(value) => setEmail({ ...email, email: value })}
              placeholder="example@helping-hand.com"
            />
          </FormControl>

          <Button style={style.btn} mt="2" onPress={handleSubmit}>
            Send Link
          </Button>
          <Button style={style.btn} onPress={() => navigation.goBack()}>
            Back
          </Button>
          <HStack mt="6" justifyContent="center"></HStack>
        </VStack>
      </Box>
    </Center>
  );
};

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

export default observer(ForgetPassword);
