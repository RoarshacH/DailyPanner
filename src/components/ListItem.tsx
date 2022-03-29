import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";

const ListItem = () => {
  const completeTask = () => {
    Alert.alert("Attention \n", "Complete The Task?", [
      {
        text: "Yes",
        onPress: () => {},
      },
      {
        text: "No",
        onPress: () => {},
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.wrapper}>
      <Text>Upcoming Deadline</Text>
      <Text>Time: HH:MM - DD:MM</Text>
      <TouchableOpacity onPress={completeTask}>
        <Text style={styles.doneButtonStyle}>Done?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "70%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D0D0E3",
    margin: 10,
    borderRadius: 10,
  },
  doneButtonStyle: { color: "#4A57A3", textDecorationStyle: "solid", textDecorationLine: "underline" },
});

export default ListItem;
