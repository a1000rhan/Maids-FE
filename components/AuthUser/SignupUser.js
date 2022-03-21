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
import COLORS from "./color";
import authStore from "../../store/userAuthStore";

const SignupUser = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = async () => {
    await authStore.signUpUser(user);
    if (authStore.user) navigation.replace("HomeScreen");
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

          {/* <FormControl>
             <View style={style.container}>
      <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        <Text style={style.label}>Maid</Text>
      </View>
      <Text>User</Text>
             </View>
</FormControl> */}

          {/* <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="email"
              onChangeText={(value) => setUser({ ...user, email: value })}
            />
          </FormControl> */}
          <Button style={style.btn} onPress={handleSubmit}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            {/* <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate}
            >
              Sign in
            </Link> */}
          </HStack>
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
export default SignupUser;
