import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Onboarding_1({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={require("../../assets/images/Logo_noBG.png")} />
      <Text style={styles.font}>Welcome to Daily Planner</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("onboarding_2");
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>Lets Go </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0D0E3",
    flexDirection: "column",
  },
  image: {
    padding: 100,
    width: 300,
    height: 300,
  },

  font: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    padding: 20,
    color: "#4A57A3",
  },
  buttonStyle: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#4A57A3",
  },
});
