import { StyleSheet, View } from "react-native";
import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import profileStore from "../../store/profileStore";
const Loading = () => {
  return (
    <View style={styles.container}>
      {/* <Progress.Circle size={70} indeterminate={true} style={styles.spinner} /> */}
      <ActivityIndicator animating={true} color="purple" size="large" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
