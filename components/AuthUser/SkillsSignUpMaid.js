import React, { useState, useEffect } from "react";
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
  Select,
} from "native-base";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Pressable,
  Platform,
} from "react-native";
import COLORS from "../AuthUser/color";

import DateTimePicker from "@react-native-community/datetimepicker";
import maidAuthStore from "../../store/maidAuthStore";
import { clockRunning } from "react-native-reanimated";
import Days from "./Days";
import { set } from "mobx";

const SkillsSignUpMaid = ({ route, navigation }) => {
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

  //................Days....................
  const [myDay, setMyDay] = useState([]);

  const days = [
    { day: "SAT", selected: false },
    { day: "SUN", selected: false },
    { day: "MON", selected: false },
    { day: "TUS", selected: false },
    { day: "WED", selected: false },
    { day: "THU", selected: false },
    { day: "FRI", selected: false },
  ];
  const showDays = days.map((item, index) => (
    <Days myDay={myDay} setMyDay={setMyDay} item={item} key={index} />
  ));
  //.................................

  //............Time..................
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [timePerid, setTimePerid] = useState("");

  const [modeTime, setModeTime] = useState("time");

  const handleChangeStart = (event, startTime) => {
    setStart(startTime);
  };
  const handleChangeEnd = (event, endTime) => {
    setEnd(endTime);
  };
  //.....................................

  //.............Date...................
  const [modeDate, setModeDate] = useState("date");
  const handleChangeDate = (event, date) => {};
  //......................................

  const handleSubmit = () => {
    setTimePerid(`${start} - ${end}`);
    setUser({
      ...user,
      availability: [
        {
          ...user.availability,
          day: myDay,
          time: timePerid,
          date: end,
        },
      ],
    });
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
            <TouchableOpacity onPress={() => {}}>
              <Text>Choose a Photo</Text>
            </TouchableOpacity>
          </FormControl>

          <FormControl>
            <FormControl.Label>Availability:</FormControl.Label>
            <FormControl.Label>Days</FormControl.Label>
            <View style={styles.chips}>{showDays}</View>

            <View style={styles.time}>
              <View>
                <FormControl.Label>start Time</FormControl.Label>

                <DateTimePicker
                  testID="dateTimePicker"
                  style={styles.picker}
                  value={start}
                  mode={modeTime}
                  onChange={handleChangeStart}
                />
              </View>
              <View>
                <FormControl.Label>End Time</FormControl.Label>

                <DateTimePicker
                  testID="dateTimePicker"
                  style={styles.picker}
                  value={end}
                  mode={modeTime}
                  onChange={handleChangeEnd}
                />
              </View>
            </View>
          </FormControl>

          <FormControl>
            <View>
              <FormControl.Label>Date</FormControl.Label>

              <DateTimePicker
                testID="dateTimePicker"
                style={styles.picker}
                value={end}
                mode={modeDate}
                onChange={handleChangeDate}
              />
            </View>
          </FormControl>

          <FormControl>
            <FormControl.Label>Years of Experience:</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) => setUser({ ...user, experience: value })}
            />
          </FormControl>

          <Button style={styles.btn} onPress={handleSubmit}>
            Sign up
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
  chips: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  time: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  picker: {
    width: 80,
  },
});
export default SkillsSignUpMaid;
