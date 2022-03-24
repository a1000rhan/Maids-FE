import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Chip } from "react-native-paper";
import { Avatar, HStack } from "native-base";
import moment from "moment";
import { observer } from "mobx-react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MaidDetails = ({ route, navigation }) => {
  const maid = route.params.maid;
  //languages List
  const langArr = maid.languages.map((language, index) => (
    <Chip key={index} style={styles.chip}>
      <Text style={styles.chipText}>{language}</Text>
    </Chip>
  ));
  //Skill List
  const skills = maid.skills.map((skill, index) => (
    <Chip key={index} style={styles.chip}>
      <Text style={styles.chipText}>{skill}</Text>
    </Chip>
  ));

  //Availability
  const availability = maid.availability.map((ava, index) => (
    <View key={index} style={styles.availableBox}>
      <Chip style={styles.availableDayBox}>
        <Text style={styles.days}>{ava.day}:</Text>
      </Chip>
      <Chip style={styles.availableTimeBox}>
        <Text style={styles.availableTime}>
          {moment(ava.timeStart).format("HH:MM")}-
          {moment(ava.timeEnd).format("HH:MM")}
        </Text>
      </Chip>
    </View>
  ));

  return (
    <>
      <Icon
        style={styles.icon}
        color={"white"}
        name="arrow-left"
        size={24}
        onPress={() => navigation.goBack()}
      />
      {/* header */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Avatar
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
            }}
            w={100}
            h={100}
            m={10}
          />

          <Text style={styles.title}>{maid.firstName}</Text>
        </View>
      </View>

      {/* body */}

      <ScrollView style={styles.scroll}>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Maid's name:</Text>

          <Text style={styles.propertyDetail}>
            {`${maid.firstName} ${maid.lastName}`}{" "}
          </Text>
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Payment per hour:</Text>

          <Text style={styles.propertyDetail}>{maid.price} KD</Text>
        </HStack>
        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Speaks:</Text>

          <View style={styles.bubbles}>{langArr}</View>
        </HStack>

        <HStack style={styles.headLine}>
          <Text style={styles.profileProperty}>Experience:</Text>

          <Text style={styles.propertyDetail}>{maid.experience}</Text>
        </HStack>

        {/* <Text style={styles.titleSec}>Speaks</Text>
        <View style={styles.bubbles}>{langArr}</View>

        <Text style={styles.titleSec}>Skills</Text>
        <View style={styles.bubbles}>{skills}</View>

        <Text style={styles.titleSec}>Availability</Text>
        <View style={styles.bubbles}>{availability}</View>

        <View style={styles.exp}>
          <Text style={styles.titleSec}>Years of Experience</Text>
          <Text style={styles.experienceTitle}>{maid.experience} years</Text>
        </View>
        <View style={styles.about}>
          <Text style={styles.titleSec}>About</Text>
          <Text style={styles.experienceTitle}>{maid.about}</Text>
        </View> */}
      </ScrollView>
    </>
  );
};

export default observer(MaidDetails);

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
  propertyDetail: { flex: 1, marginLeft: 20, fontSize: 20 },
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
  // icon: { position: "absolute", marginTop: 50, marginLeft: 15, zIndex: 10 },
  // title: {
  //   fontWeight: "bold",
  //   fontSize: 40,
  //   color: "white",
  //   marginRight: 100,
  // },

  // scroll: {
  //   backgroundColor: "#FFFAFC",
  // },
  bubbles: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 40,
  },
  titleSec: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  langBox: {
    backgroundColor: "#6867AC",
    margin: 5,
  },
  lang: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    margin: 6,
  },
  skillBox: {
    borderWidth: 1,
    borderColor: "#6867AC",
    backgroundColor: "#fff",
    margin: 5,
    fontWeight: "bold",
  },
  skill: {
    color: "#6867AC",
    fontWeight: "bold",
    alignSelf: "center",
    margin: 6,
  },
  availableBox: {
    display: "flex",
    flexDirection: "row",
  },
  availableDayBox: {
    backgroundColor: "#6867AC",
    margin: 5,
    padding: 8,
    width: 80,
  },
  days: {
    color: "white",
    fontWeight: "bold",
  },
  availableTimeBox: {
    borderWidth: 1,
    borderColor: "#6867AC",
    backgroundColor: "#fff",
    margin: 3,
    padding: 4,
  },
  availableTime: {
    fontWeight: "bold",
  },
  exp: { display: "flex", flexDirection: "row" },
  experienceTitle: {
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
  },
  about: {
    width: "100%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
    margin: 10,
    elevation: 8,
    padding: 20,
  },
});
