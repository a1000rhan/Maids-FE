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

import DateTimePicker from "@react-native-community/datetimepicker";
import maidAuthStore from "../../store/maidAuthStore";

const SkillsSignUpMaid = ({ route, navigation }) => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [day, setDay] = useState("");
  const [mode, setMode] = useState("datetime");

  const toast = useToast();

  const [user, setUser] = useState({
    username: route.params.user.username,
    password: route.params.user.password,
    email: route.params.user.email,
    firstName: route.params.user.firstName,
    lastName: route.params.user.lastName,
    civilId: route.params.user.civilId,
    nationality: route.params.user.nationality,
    languages: route.params.user.languages,
    price: 0,
    image: "",
    availability: [],
    experience: 0,
    skill: [],
    address: "",
  });
  console.log(
    "🚀 ~ file: SkillsSignUpMaid.js ~ line 45 ~ SkillsSignUpMaid ~ user",
    user.availability
  );

  const handleChangeStart = (event, startTime) => {
    setStart(startTime);
  };
  const handleChangeEnd = (event, endTime) => {
    setEnd(endTime);
  };
  const handleChangeDay = (event) => {
    setDay(event);
  };

  const handleSubmit = () => {
    setUser({
      ...user,
      availability: [
        {
          ...user.availability,
          day: day,
          timeStart: start,
          timeEnd: end,
        },
      ],
    });

    maidAuthStore.signUpMaid(user);
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
            <FormControl.Label>Price per Hour</FormControl.Label>
            <Input
              onChangeText={(value) => setUser({ ...user, price: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Image</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) => setUser({ ...user, image: value })}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Availability:</FormControl.Label>
            <FormControl.Label>Days</FormControl.Label>
            <Input type="day" onChangeText={handleChangeDay} />
            <FormControl.Label>start Time</FormControl.Label>

            <DateTimePicker
              testID="dateTimePicker"
              value={start}
              mode={mode}
              onChange={handleChangeStart}
            />

            <FormControl.Label>End Time</FormControl.Label>

            <DateTimePicker
              testID="dateTimePicker"
              value={end}
              mode={mode}
              onChange={handleChangeEnd}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Years of Experience:</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) => setUser({ ...user, experience: value })}
            />
          </FormControl>

          <Button style={style.btn} onPress={handleSubmit}>
            Sign up
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
export default SkillsSignUpMaid;
