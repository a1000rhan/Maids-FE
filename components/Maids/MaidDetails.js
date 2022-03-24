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
import { Avatar } from "native-base";
import moment from "moment";
import { observer } from "mobx-react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MaidDetails = ({ route, navigation }) => {
  const maid = route.params.maid;

  //languages List
  const langArr = maid.languages.map((language, index) => (
    <Chip key={index} style={styles.langBox}>
      <Text style={styles.lang}>{language}</Text>
    </Chip>
  ));
  //Skill List
  const skills = maid.skills.map((skill, index) => (
    <Chip key={index} style={styles.skillBox}>
      <Text style={styles.skill}>{skill}</Text>
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
        <View style={styles.details}>
          <Avatar
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
            }}
            w={100}
            h={100}
            m={10}
          />

          <Text style={styles.title}>{maid.name}</Text>
        </View>
      </View>

      {/* body */}

      <ScrollView style={styles.scroll}>
        <Text style={styles.titleSec}>Speaks</Text>
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
        </View>
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
  icon: { position: "absolute", marginTop: 50, marginLeft: 15, zIndex: 10 },

  details: {
    display: "flex",
    flexDirection: "row",
    marginTop: windowHeight / 9,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    marginRight: 100,
  },

  scroll: {
    backgroundColor: "#FFFAFC",
  },
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
