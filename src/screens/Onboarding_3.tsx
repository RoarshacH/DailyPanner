import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Onboarding_3({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={require("../../assets/images/Onboard1.png")} />
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#4A57A3" }}>Improve Productivity </Text>
      <Text style={styles.smallText}>This is important for your personal and professional life. While many people think of productivity as it relates to their job, you also want to be productive at home.. </Text>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>Back </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>Next </Text>
        </TouchableOpacity>
      </View>
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
    color: "blue",
    fontWeight: "bold",
    fontSize: 38,
  },
  buttonStyle: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#4A57A3",
    marginHorizontal: 30,
  },
  smallText: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    textAlign: "center",
    fontSize: 16,
    color: "#4A57A3",
  },
});
