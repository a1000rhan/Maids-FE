import { Button } from "native-base";
import React from "react";

import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
const Home = ({ navigation }) => {
  return (
    <View style={styles.bg}>
      <SafeAreaView>
        <Button onPress={() => navigation.replace("List")}>Hello </Button>
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
  homeImage: {
    width: 200,
    height: 200,
  },
});
