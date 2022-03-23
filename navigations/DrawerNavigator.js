import React from "react";
import Home from "../components/Home";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MaidsList from "../components/Maids/MaidsList";
import { Avatar, HStack } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import LogoutIcon from "react-native-vector-icons/MaterialIcons";
import User from "../components/User/User";
import SignupUser from "../components/AuthUser/SignupUser";
import { observer } from "mobx-react";
import MaidProfile from "../components/Maids/MaidProfile";
import BookingItem from "../components/Booking/BookingItem";
import SigninUser from "../components/AuthUser/SigninUser";
import maidAuthStore from "../store/maidAuthStore";
import userAuthStore from "../store/userAuthStore";
import COLORS from "../components/AuthUser/color";

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
      {userAuthStore.user && maidAuthStore && (
        <Pressable
          style={styles.logout}
          onPress={() => userAuthStore.signOut()}
        >
          <LogoutIcon size={22} color={COLORS.main} name="logout" />
          <Text style={styles.logText}>Logout</Text>
        </Pressable>
      )}
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Maids"
        component={MaidsList}
        options={{
          drawerIcon: ({ color }) => {
            <Icon name="home-outline" size={22} color={color} />;
          },
          drawerActiveBackgroundColor: "#E7E6FF",
          drawerLabelStyle: { color: "#6867AC", fontWeight: "bold" },
          headerTitle: () => {
            <Text>
              {"Maids"}
              <Icon name="home-outline" size={22} color={color} />
            </Text>;
          },
          headerShown: false,
          headerTitleStyle: { fontSize: 40, color: "white" },
        }}
      />
      <Drawer.Screen
        options={{
          drawerActiveBackgroundColor: "#E7E6FF",
          drawerLabelStyle: { color: "#6867AC", fontWeight: "bold" },
          headerTintColor: "white",

          headerStyle: {
            backgroundColor: "#6867AC",
            height: 230,
            borderRadius: 20,
          },

          headerTitleStyle: { fontSize: 40, color: "white" },
        }}
        name="User"
        component={User}
      />
      <Drawer.Screen
        options={{
          drawerActiveBackgroundColor: "#E7E6FF",
          drawerLabelStyle: { color: "#6867AC", fontWeight: "bold" },
          headerTintColor: "white",
          drawerLabel: "Booking",
          headerTitle: "Booking",
          headerStyle: {
            backgroundColor: "#6867AC",
          },
          headerTitleStyle: { color: "white" },
        }}
        name="Booking"
        component={BookingItem}
      />

      <Drawer.Screen
        options={{
          drawerActiveBackgroundColor: "#E7E6FF",
          drawerLabelStyle: { color: "#6867AC", fontWeight: "bold" },
          headerShown: false,
        }}
        name="Profile"
        component={MaidProfile}
      />

      {!userAuthStore.user && (
        <>
          {!maidAuthStore.maid && (
            <>
              <Drawer.Screen
                options={{
                  drawerActiveBackgroundColor: "#E7E6FF",
                  drawerLabelStyle: { color: "#6867AC", fontWeight: "bold" },
                  headerTintColor: "white",
                  drawerLabel: "Sign Up",
                  headerTitle: "Sign Up",
                  headerStyle: {
                    backgroundColor: "#6867AC",
                  },
                  headerTitleStyle: { color: "white" },
                }}
                name="SignupUser"
                component={SignupUser}
              />

              <Drawer.Screen
                options={{
                  drawerActiveBackgroundColor: "#E7E6FF",
                  drawerLabelStyle: { color: "#6867AC", fontWeight: "bold" },
                  headerTintColor: "white",
                  drawerLabel: "Sign In",
                  headerTitle: "Sign In",
                  headerStyle: {
                    backgroundColor: "#6867AC",
                  },
                  headerTitleStyle: { color: "white" },
                }}
                name="SignInUser"
                component={SigninUser}
              />
            </>
          )}
        </>
      )}
    </Drawer.Navigator>
  );
};

export default observer(DrawerNavigator);

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
