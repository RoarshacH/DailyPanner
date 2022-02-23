import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUP";
import HomeScreen from "./src/screens/Home";
<<<<<<< HEAD
import ScrollViewScreen from "./src/screens/Scrolling";
=======
import DashboardView from "./src/screens/Dashboard";
>>>>>>> 2b2e1f476f73592c7b72c4b1a09aaf637ac565d4

export default function App() {
  return (
    <View style={styles.container}>
      {/* //Uncomment the Screen that needs viewing and save the file  default is Login Screen*/}
      {/* <LoginScreen></LoginScreen> */}
      {/* <SignUpScreen></SignUpScreen> */}
<<<<<<< HEAD
      <HomeScreen></HomeScreen>
      {/* <ScrollViewScreen></ScrollViewScreen> */}
=======
      {/* <HomeScreen></HomeScreen> */}
      {/* <DashboardView></DashboardView> */}
>>>>>>> 2b2e1f476f73592c7b72c4b1a09aaf637ac565d4
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
