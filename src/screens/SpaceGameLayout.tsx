import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const SpaceGameLayout = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.topBox]}>
        <View style={styles.boxes}></View>
        <View style={styles.boxes}></View>
        <View style={styles.boxes}></View>
        <View style={styles.boxes}></View>
        <View style={styles.boxes}></View>
        <View style={styles.boxes}></View>
        <View style={styles.boxes}></View>
        <View style={styles.boxes}></View>
        <View style={styles.boxes}></View>
      </View>

      <View style={[styles.middle]}>
        <View style={styles.boxes}></View>
        <View style={styles.ball3}></View>
      </View>

      <View style={[styles.middle]}>
        <View style={styles.boxes}></View>
        <View style={styles.ball2}></View>
      </View>
      <View style={[styles.bottomBox]}>
        <View style={styles.ball1}></View>
        <View style={styles.longBox}></View>
      </View>

      <View style={[styles.bottomBox]}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F7EBEC",
    flex: 1,
    flexDirection: "column",
  },
  topBox: {
    padding: 20,
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  bottomBox: {
    flex: 1,
    justifyContent: "flex-end",
  },
  middle: {
    flex: 0.5,
    justifyContent: "flex-end",
  },
  boxes: {
    backgroundColor: "#3A506B",
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 10,
    alignSelf: "center",
    position: "relative",
  },
  longBox: {
    position: "relative",
    left: 150,
    backgroundColor: "#0B132B",
    height: 10,
    width: 80,
  },
  ball1: {
    backgroundColor: "#5BC0BE",
    height: 40,
    width: 40,
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
    right: 140,
    borderRadius: 100,
  },
  ball2: {
    backgroundColor: "#5BC0BE",
    height: 40,
    width: 40,
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 100,
  },
  ball3: {
    backgroundColor: "#5BC0BE",
    height: 40,
    width: 40,
    alignSelf: "center",
    position: "absolute",
    bottom: 122,
    left: 20,
    borderRadius: 100,
  },
  fab: {
    marginTop: 5,
    height: 50,
    width: 50,
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 100,
  },
});

export default SpaceGameLayout;
