import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Daily Planner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  headerText: {
    fontSize: 24,
    color: "black",
    fontWeight: "400",
  },
});

export default Header;
