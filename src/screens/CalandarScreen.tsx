import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import Header from "../components/Header";

const ManageAccount = () => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.content]}>
        <Calendar
          style={styles.calandar}
          markingType="multi-period"
          markedDates={{
            "2017-12-14": {
              periods: [
                { startingDay: false, endingDay: true, color: "#5f9ea0" },
                { startingDay: false, endingDay: true, color: "#ffa500" },
                { startingDay: true, endingDay: false, color: "#f0e68c" },
              ],
            },
            "2017-12-15": {
              periods: [{ startingDay: true, endingDay: false, color: "#ffa500" }, { color: "transparent" }, { startingDay: false, endingDay: false, color: "#f0e68c" }],
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    flex: 1,
    marginTop: 50,
    marginBottom: 40,
  },
  calandar: {
    flex: 1,
    width: 400,
  },
});

export default ManageAccount;
