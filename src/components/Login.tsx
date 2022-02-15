import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.box1_1}></View>
        <View style={styles.box1_2}>
          <Text style={styles.headerTextStyle}>Welcome</Text>
        </View>
      </View>

      <View style={styles.body}>
        <TextInput style={styles.input} value={"Username"} />
        <TextInput
          style={styles.input}
          value={"Password"}
          placeholder="Password"
        />
        <Text style={styles.smallText}> Forgot Password</Text>
      </View>
      <View style={styles.buttonSet}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> LogIn </Text>
        </TouchableOpacity>

        <View style={styles.signUpRow}>
          <TouchableOpacity style={styles.signUpImages}>
            <Image
              style={styles.signUpImages}
              source={require("./../../assets/images/facebook.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpImages}>
            <Image
              style={styles.signUpImages}
              source={require("./../../assets/images/Instagram.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpImages}>
            <Image
              style={styles.signUpImages}
              source={require("./../../assets/images/twitter.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.smallText}> Not a User Sign up Here!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  top: {
    marginTop: "10%",
    flex: 2,
    justifyContent: "flex-end",
  },
  body: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
  },
  footer: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonSet: {
    flex: 1.5,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "10%",
  },
  box1_1: {
    backgroundColor: "blue",
    marginTop: 5,
    height: 80,
    width: 80,
    alignSelf: "center",
    position: "relative",
    bottom: 50,
  },
  box1_2: {
    backgroundColor: "teal",
    marginTop: 5,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextStyle: {
    fontSize: 24,
    ...Platform.select({
      ios: {
        color: "gray",
        fontWeight: "400",
      },
      android: {
        color: "white",
        fontWeight: "700",
      },
    }),
  },
  input: {
    height: 50,
    margin: 12,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "gray",
    height: 50,
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  smallText: {
    position: "relative",
    bottom: -10,
    color: "blue",
    textDecorationLine: "underline",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
  },
  signUpRow: {
    flex: 0.2,
    flexDirection: "row",
    position: "relative",
    paddingTop: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  signUpImages: {
    margin: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});

export default Login;
