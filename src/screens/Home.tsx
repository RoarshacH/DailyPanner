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
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const ListViewTest = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header></Header>
      <View style={styles.bodyTop}>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </View>
      <View style={styles.bodyBottom}>
        <TouchableOpacity style={styles.button}>
          <Text> Tasks For Today </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> Calander View </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> List All Tasks </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> Logout </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundButton}>
          <Image
            style={styles.imagebutton}
            source={require("./../../assets/images/addItem (2).png")}
          ></Image>
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
  imagebutton: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  roundButton: {
    borderRadius: 50,
    height: 40,
    width: 40,
    // backgroundColor: "orange",
    position: "relative",
    bottom: -20,
    right: -150,
  },
});

export default ListViewTest;
