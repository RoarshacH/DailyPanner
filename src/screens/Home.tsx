import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, TextInput } from "react-native";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const HomeScreen = ({ navigation, route }) => {
  const [error, showError] = useState<Boolean>(false);

  const { username } = route.params;

  return (
    <View style={styles.wrapper}>
      <Header headerTitle={username}></Header>
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

        <TouchableOpacity
          onPress={() => {
            navigation.push("listScreen");
          }}
          style={styles.button}
        >
          <Text> List All Tasks </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "login" }],
            });
          }}
        >
          <Text> Logout </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundButton}>
          <Image style={styles.imagebutton} source={require("./../../assets/images/fabImage.png")}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
    position: "relative",
    bottom: 10,
    right: -150,
  },
});

export default HomeScreen;
