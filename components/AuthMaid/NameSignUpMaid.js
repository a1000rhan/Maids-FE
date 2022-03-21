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
import COLORS from "../AuthUser/color";
import authStore from "../../store/maidAuthStore";

const NameSignUpMaid = ({ navigation, route }) => {
  const toast = useToast();

  const [user, setUser] = useState({
    username: route.params.user.username,
    password: route.params.user.password,
    email: route.params.user.email,
    firstName: "",
    lastName: "",
    civilId: "",
    nationality: "",
    languages: [],
    address: "",
  });

  const handleSubmit = async () => {
    navigation.navigate("SkillsSignUpMaid", { user: user });
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
            <FormControl.Label>First Name</FormControl.Label>
            <Input
              onChangeText={(value) => setUser({ ...user, firstName: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) => setUser({ ...user, lastName: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Nationality</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) => setUser({ ...user, nationality: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Civil Id</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) => setUser({ ...user, civilId: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Languages</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) => setUser({ ...user, languages: [value] })}
            />
          </FormControl>

          <Button style={style.btn} onPress={handleSubmit}>
            Next
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
export default NameSignUpMaid;
