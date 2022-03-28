import { Button } from "native-base";
import React from "react";

import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import profileStore from "../store/profileStore";

const Home = ({ navigation }) => {
  const handleClick = () => {
    profileStore.fetchProfiles();
    navigation.replace("List");
  };
  return (
    <View style={styles.bg}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.subtitle}>Because We Care About You</Text>
        <Text style={styles.subtitle}>We can Give you A Hand</Text>
        <Text style={styles.title}>Helping Hand</Text>
        <Image
          style={{ width: 400, height: 400 }}
          source={require("../assets/clean.gif")}
        />
        <Button style={styles.btn} onPress={handleClick}>
          <Text style={styles.btnText}>Lets Start Cleaning</Text>
        </Button>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#6867AC",
    height: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "#D0D0D0",
    marginTop: 14,
    fontWeight: "bold",
    fontSize: 15,
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
  },
  homeImage: {
    width: 200,
    height: 200,
  },
  btn: {
    backgroundColor: "#E7E6FF",
    width: 246,
    height: 63,
    color: "black",
    borderRadius: 20,
    marginTop: 30,
  },
  btnText: {
    fontWeight: "bold",
    color: "#6867AC",
  },
});
