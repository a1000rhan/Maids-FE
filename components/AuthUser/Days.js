import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip } from "react-native-paper";

const Days = ({ item, setMyDay, myDay }) => {
  const [isSelected, setIsSelected] = useState(item.selected);

  const handleSelect = (item) => {
    setIsSelected(!isSelected);
    const foundDay = myDay.find((_day) => _day?.day === item.day);

    if (!foundDay) setMyDay([...myDay, item]);
    else {
      setMyDay(myDay.filter((_day) => _day?.day !== item.day));
    }
  };
  return (
    <Chip
      style={{
        margin: 2,
        backgroundColor: isSelected ? "#6867AC" : "#E3E3E4",
      }}
      onPress={() => handleSelect(item)}
      selected={isSelected}
    >
      {item.day}
    </Chip>
  );
};

export default Days;

const styles = StyleSheet.create({});
