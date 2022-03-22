import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { Avatar, Button, ScrollView, Input } from "native-base";


const BookingItem = ({ booking, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Booking", { booking: booking });
      }}
    >
       
        <View style={styles.layout}>
        <Text>Name               Date                Action               Status </Text>
        </View>
      <View style={styles.card2}>
        

       
      </View>
    </Pressable>
  );
};

export default BookingItem;

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
    elevation: 8,
  },

  card2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 60,
    shadowColor: "#000",
    borderRadius:15,
    borderWidth:1,
    borderColor:"#6867AC",
    shadowOffset: {
      width: 0,
      height: 2,
      
    },
    
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
    margin: 15,
    marginLeft:10,
    elevation: 8,
  },
  layout:{
      marginTop:10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
