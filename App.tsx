import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/components/Login";
import SignUpScreen from "./src/components/SignUP";
import HomeScreen from "./src/components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      {/* //Uncomment the Screen that needs viewing and save the file  default is Login Screen*/}
      <LoginScreen></LoginScreen>
      {/* <SignUpScreen></SignUpScreen> */}
      {/* <HomeScreen></HomeScreen> */}
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
