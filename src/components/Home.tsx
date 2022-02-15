import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "./Header";

const ListViewTest = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header></Header>
      <View style={styles.bodyTop}></View>
      <View style={styles.bodyBottom}>
        <TouchableOpacity style={styles.button}>
          <Text> Opacity Btn </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> Opacity Btn </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> Opacity Btn </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> Opacity Btn </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> Opacity Btn </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundButton}>
          <Text> </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "gray",
    height: 50,
    width: 250,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
  },
  bodyBottom: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
  },
  footer: {
    backgroundColor: "#eee",
    flex: 0.4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
    height: 300,
    position: "relative",
    top: 0,
  },
  roundButton: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: "orange",
    position: "relative",
    bottom: -20,
    right: -150,
  },
});

export default ListViewTest;
