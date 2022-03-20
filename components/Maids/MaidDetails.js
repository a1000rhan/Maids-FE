import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import data from "../../data";

const MaidDetails = ({ route, navigation }) => {
  const maid = route.params.maid;

  //languages List
  const langArr = maid.languages.map((language) => (
    <View style={styles.langBox}>
      <Text style={styles.lang}>{language}</Text>
    </View>
  ));
  //Skill List
  const skills = maid.skills.map((skill) => (
    <View style={styles.skillBox}>
      <Text style={styles.skill}>{skill}</Text>
    </View>
  ));

  //availability
  const availability = maid.availability.map((ava) => (
    <View style={styles.availableBox}>
      <View style={styles.availableDayBox}>
        <Text style={styles.days}>{ava.day}:</Text>
      </View>
      <View style={styles.availableTimeBox}>
        <Text>{ava.time}</Text>
      </View>
    </View>
  ));
  return (
    <View>
      <View style={styles.header}>
        <Icon
          color={"white"}
          name="arrow-left"
          size={22}
          onPress={() => navigation.navigate("List")}
        />
        <Text style={styles.title}>Details</Text>
      </View>
      <View style={styles.bg}>
        <Text style={styles.titleSec}>Speaks</Text>
        <View style={styles.bubbles}>{langArr}</View>

        <Text style={styles.titleSec}>Skills</Text>
        <View style={styles.bubbles}>{skills}</View>

        <Text style={styles.titleSec}>Availability</Text>
        <View style={styles.bubbles}>{availability}</View>
      </View>
    </View>
  );
};

export default MaidDetails;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6867AC",
    height: 230,
    borderRadius: 20,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    marginRight: 100,
  },
  bg: {
    backgroundColor: "#FFFAFC",
    height: "100%",
    width: "100%",
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
    borderRadius: 11,
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
    borderRadius: 11,
    margin: 5,
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
    borderRadius: 11,
    margin: 5,
    padding: 8,
    width: 55,
  },
  days: {
    color: "white",
    fontWeight: "bold",
  },
  availableTimeBox: {
    borderWidth: 1,
    borderColor: "#6867AC",
    backgroundColor: "#fff",
    borderRadius: 11,
    margin: 3,
    padding: 4,
  },
});
