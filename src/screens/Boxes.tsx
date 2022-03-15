import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderBox from "../components/HeaderBoxes";

const Boxes = () => {
  return (
    <View style={styles.wrapper}>
      <HeaderBox></HeaderBox>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text> Urgent</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text> High </Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text> Medium</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <Text> Low</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "85%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  box: {
    width: "50%",
    height: "50%",
    padding: 5,
  },

  inner: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Boxes;
