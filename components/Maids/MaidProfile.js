import { Avatar, HStack, Button } from "native-base";

import moment from "moment";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Chip } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import IconEdit from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";
import profileStore from "../../store/profileStore";
import maidAuthStore from "../../store/maidAuthStore";
import Loading from "../Loading";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MaidProfile = ({ navigation }) => {
  if (maidAuthStore.loading || profileStore.loading) return <Loading />;
  const maidProfile = profileStore.profiles.find(
    (profile) => profile.owner._id === maidAuthStore.maid._id
  );

  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState(maidProfile);
  const [skill, setSkill] = useState(maidProfile.skills);
  const [language, setLanguage] = useState(maidProfile.languages);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("dateTime");
  const [show, setShow] = useState(false);
  let skills = [];
  if (profile.skills) {
    skills = profile.skills.map((skill) => (
      <Chip style={styles.chip}>
        <Text style={styles.chipText}>{skill}</Text>
      </Chip>
    ));
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  let languages = [];
  if (profile.languages) {
    languages = profile.languages.map((language) => (
      <Chip style={styles.chip}>
        <Text style={styles.chipText}>{language}</Text>
      </Chip>
    ));
  }
  let availability = [];
  if (profile.availability) {
    availability = profile.availability.map((availability) => (
      <View style={styles.availTime}>
        <Chip style={styles.chipDay}>
          <Text style={styles.chipText}>{availability.day}</Text>
        </Chip>
        <Chip style={styles.timeChip}>
          <Text style={styles.timeText}>
            {moment(availability.timeStart).format("HH:MM")}-
            {moment(availability.timeEnd).format("HH:MM")}
          </Text>
        </Chip>
      </View>
    ));
  }
  const handleName = (value) => {
    setProfile({ ...profile, firstName: value });
  };
  const handleSkill = (value) => {
    setSkill(value);
  };
  const handleLanguage = (value) => {
    setLanguage(value);
  };
  const handleAbout = (value) => {
    setProfile({ ...profile, about: value });
  };
  const handleExperience = (value) => {
    setProfile({ ...profile, experience: value });
  };
  const handlePayment = (value) => {
    setProfile({ ...profile, price: value });
  };
  const handleSubmit = (value) => {
    let updatedProfile = {
      ...profile,
      skills: skill.split(","),
      languages: language.split(","),
    };
    setProfile(updatedProfile);
    profileStore.updateProfile(updatedProfile);
    setEdit(false);
  };
  //   const handleSkills = (value) => {
  //     setProfile({ ...profile, skills: value });
  //   };
  return (
    <>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Icon
            color={"white"}
            name="reorder-three"
            size={30}
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
        <View style={styles.profile}>
          <Avatar
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
            }}
            w={100}
            h={100}
            m={10}
            onPress={() => navigation.toggleDrawer()}
          />
          <Text style={styles.title}>Profile</Text>
        </View>
      </View>
      <ScrollView>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Name: </Text>
          <View style={styles.propertyDetail}>
            {edit ? (
              <TextInput
                style={styles.defaultSize}
                multiline={true}
                value={profile.firstName}
                onChangeText={handleName}
              />
            ) : (
              <Text style={styles.defaultSize}>{profile.firstName}</Text>
            )}
          </View>
          {edit ? (
            <Button style={styles.btn} onPress={handleSubmit}>
              confirm changes
            </Button>
          ) : (
            <IconEdit
              color={"#6867AC"}
              name="edit"
              size={30}
              style={styles.editIcon}
              onPress={() => (edit ? setEdit(false) : setEdit(true))}
            />
          )}
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Payment (per hour) : </Text>
          <View style={styles.propertyDetail}>
            {edit ? (
              <TextInput
                style={styles.defaultSize}
                multiline={true}
                value={profile.price.toString()}
                onChangeText={handlePayment}
              />
            ) : (
              <Text style={styles.defaultSize}>{profile.price}</Text>
            )}
          </View>
        </HStack>

        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Skills: </Text>
          {edit ? (
            <TextInput
              style={styles.inputText}
              value={skill}
              multiline={true}
              onChangeText={handleSkill}
            />
          ) : (
            profile.skills && <View style={styles.bubbles}>{skills}</View>
          )}
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Language: </Text>
          {edit ? (
            <TextInput
              style={styles.inputText}
              value={language}
              multiline={true}
              onChangeText={handleLanguage}
            />
          ) : (
            <View style={styles.bubbles}>{languages}</View>
          )}
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Experience (Years) : </Text>
          <View style={styles.propertyDetail}>
            {edit ? (
              <TextInput
                style={styles.defaultSize}
                multiline={true}
                value={profile.experience ? profile.experience.toString() : ""}
                onChangeText={handleExperience}
              />
            ) : (
              <Text style={styles.defaultSize}>{profile.experience}</Text>
            )}
          </View>
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Availability: </Text>
          {edit ? (
            <>
              <View>
                <Button
                  style={styles.btn}
                  onPress={showDatepicker}
                  title="Show date picker!"
                >
                  Choose date
                </Button>
              </View>
              <View>
                <Button
                  style={styles.btn}
                  onPress={showTimepicker}
                  title="Show time picker!"
                >
                  Choose start time
                </Button>
              </View>

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </>
          ) : (
            <View style={styles.bubbles}>{availability}</View>
          )}
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Bookings : </Text>
          <View style={styles.propertyDetail}>
            <Text style={styles.defaultSize}>Friday 25 March </Text>
          </View>
        </HStack>
        <View style={styles.headLine}>
          <Text style={styles.profileProperty}>About: </Text>
          <View style={styles.propertyDetail}>
            {edit ? (
              <TextInput
                style={styles.defaultSize}
                multiline={true}
                value={profile.about}
                onChangeText={handleAbout}
              />
            ) : (
              <View>
                <Text style={styles.defaultSize}>{profile.about}</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MaidProfile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6867AC",
    height: 230,
    borderRadius: 20,
    display: "flex",

    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    marginRight: 100,
  },
  icon: {
    marginTop: 40,
    marginLeft: 15,
    zIndex: 20,
    position: "absolute",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    marginTop: windowHeight / 9,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headLine: {
    display: "flex",
    width: "95%",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
    elevation: 8,
    padding: 10,
  },
  profileProperty: { fontSize: 20, fontWeight: "bold" },
  defaultSize: { fontSize: 20 },
  propertyDetail: { flex: 1, marginLeft: 30 },
  bubbles: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 30,
    flex: 1,
  },
  chip: {
    backgroundColor: "#6867AC",
    marginBottom: 5,
    marginRight: 5,
  },
  chipDay: {
    backgroundColor: "#6867AC",
    marginBottom: 5,
    marginRight: 5,
    width: 60,
  },
  editIcon: { marginRight: 10 },
  btn: { backgroundColor: "#6867AC" },
  chipText: { color: "white", fontWeight: "bold" },
  availTime: { display: "flex", flexDirection: "row" },
  timeChip: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#6867AC",
    marginBottom: 10,
    marginRight: 10,
  },
  timeText: { color: "black", fontSize: 15, fontWeight: "bold" },
  inputText: { width: 300, fontSize: 15 },
});
