import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";

const Login = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.box1, styles.boxStyle]}>
        <View style={[styles.box1_1]}></View>
        <View style={[styles.box1_2]}>
          <Text style={styles.headerTextStyle}>Welcome</Text>
        </View>
      </View>

      <View style={[styles.box2, styles.boxStyle]}>
        <View style={[styles.box2_1]}>{/* <Text>Header Text</Text> */}</View>
        <View style={[styles.box2_2]}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  boxStyle: {},
  box1: {
    marginTop: 40,
    // backgroundColor: "green",
    flex: 2,
    justifyContent: "flex-end",
  },
  box2: {
    // backgroundColor: "orange",
    flex: 3,
    justifyContent: "flex-end",
  },
  box1_1: {
    backgroundColor: "blue",
    marginTop: 5,
    height: 80,
    width: 80,
    alignSelf: "center",
    position: "relative",
    bottom: 50,
  },
  box1_2: {
    backgroundColor: "teal",
    marginTop: 5,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  box2_1: {
    backgroundColor: "teal",
    marginTop: 5,
    height: 80,
  },
  box2_2: {
    backgroundColor: "teal",
    marginTop: 5,
    height: 40,
    position: "relative",
    marginBottom: 40,
  },
  headerTextStyle: {
    fontSize: 24,
    ...Platform.select({
      ios: {
        color: "gray",
        fontWeight: "400",
      },
      android: {
        color: "white",
        fontWeight: "700",
      },
    }),
  },
  defaultContainer: {
    flex: 1,
    fontFamily: "sans-serif",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
