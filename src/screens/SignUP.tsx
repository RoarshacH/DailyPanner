import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const SignUP = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}></View>

      <View style={styles.body}>
        <View style={styles.topTitle}>
          <Text style={styles.headerTextStyle}>Sign Up Here</Text>
        </View>
        <TextInput style={styles.input} value={"Username"} />
        <TextInput style={styles.input} value={"Email"} />
        <TextInput style={styles.input} value={"Password"} placeholder="Password" />
        <TextInput style={styles.input} value={"Confirm Password"} placeholder="Confirm Password" />
        <Text style={styles.smallText}>By signing up You agree to the our Terms of service and privacy policy</Text>
      </View>
      <View style={styles.buttonSet}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Cancel </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  top: {
    flex: 0.5,
    justifyContent: "flex-end",
  },
  body: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
  },
  footer: {
    flex: 0.8,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonSet: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: "10%",
  },
  topTitle: {
    marginTop: 5,
    flex: 0.2,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    bottom: 40,
  },
  headerTextStyle: {
    fontSize: 34,
    color: "gray",
    fontWeight: "600",
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
    paddingLeft: 20,
  },
  button: {
    backgroundColor: "gray",
    height: 50,
    width: 120,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  smallText: {
    alignSelf: "center",
    textAlign: "center",
    width: 300,
    position: "relative",
    bottom: -20,
    color: "blue",
    textDecorationLine: "underline",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default SignUP;
