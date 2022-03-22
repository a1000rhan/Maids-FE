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
} from "native-base";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import COLORS from "../AuthUser/color";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Days from "./Days";
import maidAuthStore from "../../store/maidAuthStore";

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
  //.............Image Picker...............

  const openImagePickerAsync = async () => {
    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (photo.cancelled === true) {
      return;
    }
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = photo.uri;

    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Assume "photo" is the name of the form field the server expects
    setUser({ ...user, image: localUri });
  };

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
  const [TimeStart, setTimeStart] = useState(new Date());
  const [TimeEnd, setTimeEnd] = useState(new Date());
  const [timePerid, setTimePerid] = useState("");

  const [modeTime, setModeTime] = useState("time");
  //.....................................

  //.............Date...................
  const [modeDate, setModeDate] = useState("date");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //......................................

  const handleSubmit = () => {
    setTimePerid(
      `${moment(TimeStart).format("HH:MM")} - ${moment(TimeEnd).format(
        "HH:MM"
      )}`
    );

    setUser({
      ...user,
      availability: [
        {
          day: myDay,
          time: timePerid,
          startDate: startDate,
          endDate: endDate,
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
            <TouchableOpacity
              style={styles.addBtn}
              onPress={openImagePickerAsync}
            >
              <Text style={styles.photoTxtBtn}>Choose a Photo</Text>
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
                  value={TimeStart}
                  style={{ flex: 1 }}
                  mode={modeTime}
                  onChange={(event, time) => setTimeStart(time)}
                />
              </View>
              <View>
                <FormControl.Label>End Date</FormControl.Label>

                <DateTimePicker
                  testID="dateTimePicker"
                  style={styles.picker}
                  value={TimeEnd}
                  mode={modeTime}
                  onChange={(event, time) => setTimeEnd(time)}
                />
              </View>
            </View>
            <View style={styles.time}>
              <View>
                <FormControl.Label>start Date</FormControl.Label>

                <DateTimePicker
                  testID="dateTimePicker"
                  style={styles.picker}
                  value={startDate}
                  mode={modeDate}
                  onChange={(event, date) => setStartDate(date)}
                />
              </View>

              <View>
                <FormControl.Label>End Date</FormControl.Label>

                <DateTimePicker
                  testID="dateTimePicker"
                  style={styles.picker}
                  value={endDate}
                  mode={modeDate}
                  onChange={(event, date) => setEndDate(date)}
                />
              </View>
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

  label: {
    margin: 8,
  },
  addBtn: {
    display: "flex",
    alignContent: "center",
    paddingTop: 10,
    alignItems: "flex-end",
  },
  photoTxtBtn: {
    alignSelf: "center",
    margin: 20,
    backgroundColor: COLORS.main,
    color: "white",
    borderRadius: 20,
    width: "60%",
    height: 35,
    marginTop: 5,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 3,
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
