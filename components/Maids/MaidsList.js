import React, { useState } from "react";
import { Avatar, Button, Input } from "native-base";
import {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import MaidItem from "./MaidItem";
import Icon from "react-native-vector-icons/Ionicons";
import profileStore from "../../store/profileStore";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { observer } from "mobx-react";
import Loading from "../Loading";
const MaidsList = ({ navigation }) => {
  const [query, setQuery] = useState("");
  if (profileStore.loading) return <Loading />;
  const maidsArr = profileStore.profiles
    .filter(
      (maid) => maid.firstName && maid.lastName && maid.nationality
      // maid.skills &&
      // maid.languages
    )
    .filter(
      (maid) =>
        maid.owner.username.toLowerCase().includes(query.toLowerCase()) ||
        maid.price.toString().includes(query)
    )
    .map((maid) => (
      <MaidItem maid={maid} key={maid._id} navigation={navigation} />
    ));
  console.log(
    "🚀 ~ file: MaidsList.js ~ line 31 ~ MaidsList ~ maidsArr",
    maidsArr
  );

  return (
    <>
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
      <View style={styles.header}>
        <View style={styles.icon}>
          <Icon
            color={"white"}
            name="reorder-three"
            size={30}
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
        <Image
          style={styles.topImg}
          source={require("../../assets/1995438.png")}
        />
      </View>

      <ScrollView style={styles.scroll}>
        <View style={styles.cards}>{maidsArr}</View>
      </ScrollView>
    </>
  );
};

export default observer(MaidsList);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6867AC",
    height: 230,
    borderRadius: 20,
    display: "flex",

    flexDirection: "row",
  },
  icon: {
    marginTop: 50,
    marginLeft: 15,
    zIndex: 10,
  },
  topImg: {
    position: "absolute",
    marginTop: 30,
    marginLeft: windowWidth / 5,
  },
  bg: {},
  searchBar: {
    position: "absolute",
    marginTop: windowHeight / 4,
    zIndex: 20,
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
  scroll: { backgroundColor: "#FFFAFC" },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
