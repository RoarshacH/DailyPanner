import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={require("./../../assets/images/logoExample.png")}></Image>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerTextStyle}>Welcome</Text>
        </View>
      </View>

      <View style={styles.body}>
        <TextInput style={styles.input} value={"Username"} />
        <TextInput style={styles.input} value={"Password"} placeholder="Password" />
        <Text style={styles.smallText}> Forgot Password</Text>
      </View>
      <View style={styles.buttonSet}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "home" }],
            });
          }}
        >
          <Text style={styles.buttonText}> LogIn </Text>
        </TouchableOpacity>

        <View style={styles.signUpRow}>
          <TouchableOpacity style={styles.signUpImages}>
            <Image style={styles.signUpImages} source={require("./../../assets/images/facebook.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpImages}>
            <Image style={styles.signUpImages} source={require("./../../assets/images/Instagram.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpImages}>
            <Image style={styles.signUpImages} source={require("./../../assets/images/twitter.png")}></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            navigation.push("signUp");
          }}
        >
          <Text style={styles.smallText}>Not a User Sign up Here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  top: {
    flex: 2,
    justifyContent: "flex-end",
  },
  body: {
    flex: 1.5,
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
  logo: {
    marginTop: 25,
    height: 150,
    width: 150,
    alignSelf: "center",
    position: "relative",
    bottom: 50,
    borderRadius: 50,
  },
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: "center",
    position: "relative",
    borderRadius: 50,
  },
  headerTextView: {
    marginTop: 5,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextStyle: {
    fontSize: 26,
    color: "gray",
    fontWeight: "400",
  },
  input: {
    height: 50,
    margin: 12,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    fontStyle: "italic",
    fontSize: 16,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: "#eee",
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
