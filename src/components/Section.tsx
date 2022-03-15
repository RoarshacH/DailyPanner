import React from "react";
import { View, StyleSheet } from "react-native";

const Section = () => {
  return (
    <View style={styles.body}>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  box1: {
    backgroundColor: "gray",
    width: 300,
    height: 100,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
});

export default Section;
