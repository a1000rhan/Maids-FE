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
} from "native-base";
import { StyleSheet, Text } from "react-native";
import { Chip } from "react-native-paper";

import COLORS from "./color";
import data from "../../data";
let lang;
const NameSignUpMaid = ({ navigation, route }) => {
  const toast = useToast();
  const [language, setLanguage] = useState("");

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

  const handelChange = (event) => {
    setLanguage(event);

    const temp = language.includes(",") ? (
      <Chip style={styles.chip}>
        <Text style={styles.chipText}>{language}</Text>
      </Chip>
    ) : (
      ""
    );
    lang = temp;
  };
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
            <Input type="text" value={language} onChangeText={handelChange} />
            {lang}
          </FormControl>

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
  chip: {
    backgroundColor: "#6867AC",
    marginBottom: 5,
    marginRight: 5,
  },
  chipText: { color: "white", fontWeight: "bold" },
});
export default NameSignUpMaid;
