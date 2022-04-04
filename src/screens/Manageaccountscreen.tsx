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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const ManageAccount = () => {
  return (
    <SafeAreaView>
<Calendar
  markingType="multi-period"
  markedDates={{
    '2017-12-14': {
      periods: [
        {startingDay: false, endingDay: true, color: '#5f9ea0'},
        {startingDay: false, endingDay: true, color: '#ffa500'},
        {startingDay: true, endingDay: false, color: '#f0e68c'}
      ]
    },
    '2017-12-15': {
      periods: [
        {startingDay: true, endingDay: false, color: '#ffa500'},
        {color: 'transparent'},
        {startingDay: false, endingDay: false, color: '#f0e68c'}
      ]
    }
  }}
/>

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
    textAlign: "center",
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
