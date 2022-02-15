import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/components/Login";
import SignUpScreen from "./src/components/SignUP";
import HomeScreen from "./src/components/Home";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      {/* //Uncomment the Screen that needs viewing */}
      {/* <Header></Header> */}
      {/* <LoginScreen></LoginScreen> */}
      <SignUpScreen></SignUpScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
