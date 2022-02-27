import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUP";
import HomeScreen from "./src/screens/Home";
import ScrollViewScreen from "./src/screens/Scrolling";
import DashboardView from "./src/screens/Dashboard";
import ManageAccount from "./src/screens/Manageaccountscreen";
import Boxes from "./src/screens/Boxes";
import SpaceGameLayout from "./src/screens/SpaceGameLayout";

export default function App() {
  return (
    <View style={styles.container}>
      {/* //Uncomment the Screen that needs viewing and save the file  default is the Login Screen*/}
      {/* Some pages are relevent to our app some are experimental layouts */}
      <LoginScreen></LoginScreen>
      {/* <SignUpScreen></SignUpScreen> */}
      {/* <HomeScreen></HomeScreen> */}
      {/* <ScrollViewScreen></ScrollViewScreen> */}
      {/* <DashboardView></DashboardView> */}
      {/* <Boxes></Boxes> */}
      {/* <ManageAccount></ManageAccount> */}
      {/* <SpaceGameLayout></SpaceGameLayout> */}
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
