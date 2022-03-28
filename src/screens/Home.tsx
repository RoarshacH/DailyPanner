import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";

import Header from "../components/Header";
import ListItem from "../components/ListItem";

const HomeScreen = ({ navigation, route }) => {
  const username = route.params.username;
  const [listItems, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <View style={styles.wrapper}>
      <Header headerTitle={username}></Header>

      <ScrollView style={{ flex: 2 }}>
        <View style={styles.bodyTop}>
          {listItems.map((item) => {
            return <ListItem key={item} />;
          })}
          <ListItem></ListItem>
          <ListItem></ListItem>
        </View>
      </ScrollView>

      <View style={styles.bodyBottom}>
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
    flex: 0.1,
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
