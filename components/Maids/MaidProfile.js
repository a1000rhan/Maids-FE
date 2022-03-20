import { Avatar, Button, HStack } from "native-base";
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
import data from "../../data";
import IconEdit from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const MaidProfile = ({ navigation }) => {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState(data[0]);
  const [skill, setSkill] = useState(data[0].skills.toString());
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
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
  const skills = profile.skills.map((skill) => (
    <Chip style={styles.chip}>
      <Text style={styles.chipText}>{skill}</Text>
    </Chip>
  ));
  const languages = profile.languages.map((language) => (
    <Chip style={styles.chip}>
      <Text style={styles.chipText}>{language}</Text>
    </Chip>
  ));
  const availability = profile.availability.map((availability) => (
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
  const handleName = (value) => {
    setProfile({ ...profile, name: value });
  };
  const handleSkill = (value) => {
    setSkill(value);
  };
  const handleAbout = (value) => {
    setProfile({ ...profile, about: value });
  };
  const handleExperience = (value) => {
    setProfile({ ...profile, experience: value });
  };
  const handleSubmit = (value) => {
    let tempArr = skill.split(",");
    setProfile({ ...profile, skills: tempArr });
    setEdit(false);
  };
  //   const handleSkills = (value) => {
  //     setProfile({ ...profile, skills: value });
  //   };
  return (
    <>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Icon color={"white"} name="reorder-three" size={30} />
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
                value={profile.name}
                onChangeText={handleName}
              />
            ) : (
              <Text style={styles.defaultSize}>{profile.name}</Text>
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
              <Text style={styles.defaultSize}>{profile.about}</Text>
            )}
          </View>
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Skills: </Text>
          {edit ? (
            <TextInput
              value={skill}
              multiline={true}
              onChangeText={handleSkill}
            />
          ) : (
            <View style={styles.bubbles}>{skills}</View>
          )}
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Language: </Text>
          <View style={styles.bubbles}>{languages}</View>
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Experience (Years) : </Text>
          <View style={styles.propertyDetail}>
            {edit ? (
              <TextInput
                style={styles.defaultSize}
                multiline={true}
                value={String(profile.experience)}
                onChangeText={handleAbout}
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
                <Button onPress={showDatepicker} title="Show date picker!" />
              </View>
              <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
              </View>
              <Text>selected: {date.toLocaleString()}</Text>
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
    zIndex: 10,
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
  chip: { backgroundColor: "#6867AC", marginBottom: 5, marginRight: 5 },
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
});
