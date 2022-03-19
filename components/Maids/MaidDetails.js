import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import data from "../../data";

const MaidDetails = ({ navigation }) => {
  const maids = data.map((maid) => (
    <View style={styles.langBox}>
      <Text style={styles.lang}>{maid.languages}</Text>
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
        <Text>Speaks</Text>
        <View style={styles.speak}>{maids}</View>
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
  speak: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  langBox: {
    width: 90,
    backgroundColor: "#6867AC",
    borderRadius: 11,
    margin: 5,
  },
  lang: {
    color: "#fff",
  },
});
