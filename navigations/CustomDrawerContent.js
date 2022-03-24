import React from "react";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import LogoutIcon from "react-native-vector-icons/MaterialIcons";
import { Avatar, HStack } from "native-base";
import COLORS from "../components/AuthUser/color";
import userAuthStore from "../store/userAuthStore";
import maidAuthStore from "../store/maidAuthStore";
import { observer } from "mobx-react";

function CustomDrawerContent(props) {
  const checkUser = () => {
    if (userAuthStore.user) {
      return userAuthStore.user.username;
    } else if (maidAuthStore.maid) {
      return maidAuthStore.maid.username;
    } else {
      return "Guest";
    }
  };
  const checkForLogout = () => {
    if (userAuthStore.user || maidAuthStore.maid) {
      <Pressable style={styles.logout} onPress={() => userAuthStore.signOut()}>
        <LogoutIcon size={22} color={COLORS.main} name="logout" />
        <Text style={styles.logText}>Logout</Text>
      </Pressable>;
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.user}>
        <Avatar
          w={50}
          h={50}
          source={{
            uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
          }}
        />
        <Text style={styles.username}>{checkUser()}</Text>
      </View>
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          width: "80%",
          alignSelf: "center",
        }}
      />
      <DrawerItemList {...props} />
      {checkForLogout()}
    </DrawerContentScrollView>
  );
}

export default observer(CustomDrawerContent);

const styles = StyleSheet.create({
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  username: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  logout: ({ pressed }) => [
    {
      backgroundColor: pressed ? COLORS.secondary : "white",
      width: "95%",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 20,
    },
  ],
  logText: {
    fontWeight: "bold",
    marginLeft: 10,
    color: COLORS.main,
  },
});
