import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>Daily Planner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  headerText: {
    fontSize: 24,
    color: "black",
    fontWeight: "500",
  },
});

export default Header;
