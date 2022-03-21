import React from "react";
import Home from "../components/Home";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MaidsList from "../components/Maids/MaidsList";
import { Avatar } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import User from "../components/User/User";
import MaidDetails from "../components/Maids/MaidDetails";
import Signup from "../components/Auth/Signup";
import MaidProfile from "../components/Maids/MaidProfile";
import Signin from "../components/Auth/Signin";
function CustomDrawerContent(props) {
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
        <Text style={styles.username}>My Name</Text>
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
          headerShown: false,
        }}
        name="Profile"
        component={MaidProfile}
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
        name="Signup"
        component={Signup}
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
        name="Signin"
        component={Signin}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
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
});
