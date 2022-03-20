import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Avatar, Button, ScrollView, Input } from "native-base";

const MaidItem = ({ maid, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", { maid: maid });
      }}
    >
      <View style={styles.card}>
        <Avatar
          source={{
            uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
          }}
          w={100}
          h={100}
          m={3}
        />

        <View>
          <Text style={styles.username}>{maid.name}</Text>
          <Text style={styles.price}>{maid.price} KD / H</Text>
          <Text style={styles.country}>
            <Icon color="#6867AC" name="flag" />
            &nbsp;{maid.nationality}
          </Text>
        </View>

        <Button style={styles.btn}>Book</Button>
      </View>
    </Pressable>
  );
};

export default MaidItem;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
    margin: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6867AC",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6867AC",
  },
  country: {
    marginTop: 10,
  },
  btn: {
    height: 45,
    width: 80,
    backgroundColor: "#6867AC",
  },
});
