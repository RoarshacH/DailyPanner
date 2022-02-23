import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUP";
import HomeScreen from "./src/screens/Home";
import ScrollViewScreen from "./src/screens/Scrolling";
import DashboardView from "./src/screens/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      {/* //Uncomment the Screen that needs viewing and save the file  default is Login Screen*/}
      {/* <LoginScreen></LoginScreen> */}
      {/* <SignUpScreen></SignUpScreen> */}
      <HomeScreen></HomeScreen>
      {/* <ScrollViewScreen></ScrollViewScreen> */}
      {/* <HomeScreen></HomeScreen> */}
      {/* <DashboardView></DashboardView> */}
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
