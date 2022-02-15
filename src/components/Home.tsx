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

const ListViewTest = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={styles.imageStyle}
      />

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

      <TouchableOpacity style={styles.button}>
        <Text> Opacity Btn </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // // alignItems: "center", // do not work when there is flex wrap = wrap
    // alignContent: "center",
    // flexWrap: "wrap",
  },
  button: {
    backgroundColor: "green",
    height: 40,
    width: 150,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center", // do not work when there is flex wrap =
  },
  imageStyle: {
    width: "100%",
    height: 300,
    position: "relative",
    top: 0,
  },
});

export default ListViewTest;
