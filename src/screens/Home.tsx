import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

import Header from "../components/Header";
import ListItem from "../components/ListItem";

const HomeScreen = ({ navigation, route }) => {
  const username = route.params.username;
  const [listItems, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <View style={styles.wrapper}>
      <Header headerTitle={username}></Header>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.bodyTop}>
          {listItems.map((item) => {
            return <ListItem key={item} />;
          })}
        </View>
      </ScrollView>

      <View style={styles.bodyBottom}>
        <TouchableOpacity style={styles.roundButton}>
          <Image style={styles.imagebutton} source={require("./../../assets/images/fabImageAlt.png")}></Image>
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
  bodyTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
  },
  bodyBottom: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
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
    bottom: 0,
    right: -150,
    backgroundColor: "#4A57A3",
  },
});

export default HomeScreen;
