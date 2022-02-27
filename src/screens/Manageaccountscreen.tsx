import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const ManageAccount= () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require("./../../assets/images/logoExample.png")}
          ></Image>
 
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerTextStyle}>Account Profile Settings</Text>
        </View>
      </View>

      <View style={styles.body}>
        <TextInput style={styles.input} value={"Edit Username"} />
        <TextInput
          style={styles.input}
          value={"Add New Password"}
          placeholder="Add New Password"
        />
        <TextInput
          style={styles.input}
          value={"Confirm New Password"}
          placeholder="Confirm New Password"
        />
      </View>
      <View style={styles.buttonSet}>
        <TouchableOpacity style={styles.button}>
          <Text> Confirm Changes</Text>
        </TouchableOpacity>
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
    fontSize: 36,
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
    color: "#a9a9a9",
  },
  button: {
    backgroundColor: "#eee",
    height: 50,
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  
});

export default ManageAccount;
