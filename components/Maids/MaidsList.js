import React, { useState } from "react";
import { Avatar, Button, ScrollView, Input } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import data from "../../data";
import MaidItem from "./MaidItem";

const MaidsList = () => {
  const [query, setQuery] = useState("");
  const maidsArr = data
    .filter(
      (maid) =>
        maid.name.toLowerCase().includes(query.toLowerCase()) ||
        maid.price.toString().includes(query)
    )
    .map((maid) => <MaidItem maid={maid} key={maid._id} />);

  return (
    <View style={styles.bg}>
      <View style={styles.searchBar}>
        <Input
          w={350}
          h={39}
          borderColor="#6867AC"
          borderRadius={30}
          placeholder="Search..."
          onChangeText={(event) => setQuery(event)}
          InputLeftElement={
            <View style={styles.searchIcon}>
              <Icon name="search" marginLeft={1} size={23} alignSelf="center" />
            </View>
          }
        />
      </View>
      <ScrollView>
        <View style={styles.cards}>{maidsArr}</View>
      </ScrollView>
    </View>
  );
};

export default MaidsList;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#FFFAFC",
    height: "100%",
    width: "100%",
  },
  searchBar: {
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: "#F2F2F2",
  },
  searchIcon: {
    borderRadius: 30,
    width: 35,
    height: 35,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
