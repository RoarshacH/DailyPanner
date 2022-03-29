import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const ListItem = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Upcoming Deadline</Text>
      <Text>Time: HH:MM - DD:MM</Text>
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
});

export default ListItem;
