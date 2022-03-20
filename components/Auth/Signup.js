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
import { StyleSheet } from "react-native";
import COLORS from "./color"
import authStore from "../../authStore";
import CheckBox from "./CheckBox";




const Signup = ({ navigation }) => {
    const [maid, setMaid] = useState(false);
      
  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = async () => {
    await authStore.signUp(user);
    if (authStore.user) navigation.replace("List");
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
            borderWidth={1}
            borderColor="#712B75"
              onChangeText={(value) => setUser({ ...user, username: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="email"
              borderWidth={1}
              borderColor="#712B75"
              onChangeText={(value) => setUser({ ...user, email: value })}
            />
          </FormControl>

          {/* <FormControl>
            <FormControl.Label>FullName</FormControl.Label>
            <Input
              borderWidth={1}
              borderColor="#712B75"
              onChangeText={(value) => setUser({ ...user, fullname: value })}
            />
          </FormControl> */}

          {/* <FormControl>
            <FormControl.Label>Address</FormControl.Label>
            <Input
              type="email"
              borderWidth={1}
              borderColor="#712B75"
              onChangeText={(value) => setUser({ ...user, address: value })}
            />
          </FormControl> */}

                  
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              borderWidth={1}
              borderColor="#712B75"
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              borderWidth={1}
              borderColor="#712B75"
              onChangeText={(value) => setUser({ ...user, confirmpassword: value })}
            />
          </FormControl>

       <FormControl>   
       <FormControl.Label>Select your user type:</FormControl.Label>

       
          
       <CheckBox
                onPress={() => setMaid(!maid)}
                title="Maid"
                isChecked={maid}
             
              />
              <CheckBox
                onPress={() => setUser(!user)}
                title="User"
                isChecked={user}
                
              />
              
    </FormControl>  
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
export default Signup;
