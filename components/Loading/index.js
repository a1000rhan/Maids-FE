import { StyleSheet, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import profileStore from "../../store/profileStore";
const Loading = () => {
  return (
    <View style={styles.container}>
      <Progress.Circle size={70} indeterminate={true} style={styles.spinner} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  spinner: { alignSelf: "center" },
});
