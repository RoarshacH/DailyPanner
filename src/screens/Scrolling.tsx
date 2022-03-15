import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const ScrollViewScreen = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <ScrollView>
        <View style={[styles.content]}>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </View>
      </ScrollView>
      <View style={[styles.footer]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    height: 40,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#03A9F4",
    zIndex: 10,
  },
  content: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40,
  },
  footer: {
    height: 40,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#eee",
  },
});

export default ScrollViewScreen;
