import { StyleSheet, View } from "react-native";
import React from "react";
import profileStore from "../../store/profileStore";
const Loading = () => {
  return <View style={styles.container}></View>;
};

export default Loading;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  spinner: { alignSelf: "center" },
});
