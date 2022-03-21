import React, { Component, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Button, TouchableOpacity, Image, TextInput, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
// Suppress Worning due to async firease function
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

import { db } from "../../firebase/firebase";

import { doc, setDoc } from "firebase/firestore";

const setData = async (todo: IToDo) => {
  await setDoc(doc(db, "toDoTest", todo.text), {
    text: todo.text,
    completed: todo.completed,
    date: todo.date,
    priority: todo.priority,
    note: todo.note,
  });
};

const setDataTest = async () => {
  await setDoc(doc(db, "toDoTest", "mario"), {
    employment: "plumber",
    outfitColor: "red",
    specialAttack: "fireball",
  });
};

interface IToDo {
  text: string;
  completed: boolean;
  date: String;
  priority: String;
  note: String;
}

const AddTaskTest = ({ navigation }) => {
  const [value, setValue] = useState<string>("");
  const [error, showError] = useState<Boolean>(false);
  const [priority, setPriority] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const handleSubmit = (): void => {
    // var selectedDate = new Date(text);
    // var dateNow = new Date(); && text.trim()
    console.log("Date Here" + date);
    if (value.trim() && priority.trim()) {
      var todoItem: IToDo = {
        text: value,
        completed: false,
        priority: priority,
        note: note,
        date: date.toLocaleString(),
      };
      console.log(todoItem);
      setData(todoItem);
    } else showError(true);
    // Reset Stuff
    setValue("");
    setDate(new Date());
    setText("");
    setNote("");
    setPriority("");
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    // let fDate =
    //   tempDate.getDate() +
    //   "/" +
    //   tempDate.getMonth() +
    //   "/" +
    //   tempDate.getFullYear();
    // let fTime = tempDate.getHours() + " : " + tempDate.getMinutes();
    setText(tempDate.toLocaleString());
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <TextInput
        placeholder="Enter your todo task..."
        value={value}
        onChangeText={(e) => {
          setValue(e);
          showError(false);
        }}
        style={styles.inputBox}
      />
      <TextInput
        placeholder="Priority..."
        value={priority}
        onChangeText={(e) => {
          setPriority(e);
          showError(false);
        }}
        style={styles.inputBox}
      />
      <TextInput
        placeholder="Note..."
        value={note}
        onChangeText={(e) => {
          setNote(e);
          showError(false);
        }}
        style={styles.inputBox}
      />
      <TextInput editable={false} selectTextOnFocus={false} placeholder={text} value={text} style={styles.inputBox} />
      <View
        style={{
          paddingTop: 30,
          flexDirection: "row",
        }}
      >
        <Button onPress={showDatepicker} title="Date Picker!" />
        <Button onPress={showTimepicker} title="Time Picker!" />
      </View>

      {show && <DateTimePicker testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display="default" onChange={onChange} />}

      {/* <Button onPress={showTimepicker} title="Reset" /> */}

      <TouchableOpacity style={styles.roundButton} onPress={handleSubmit}>
        <Image style={styles.imagebutton} source={require("../../assets/images/fabImage.png")}></Image>
      </TouchableOpacity>
      {error && <Text style={styles.error}>Error: Input field is empty...</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "gray",
    height: 50,
    width: 250,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "#eee",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  imagebutton: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  roundButton: {
    borderRadius: 50,
    height: 40,
    width: 40,
    position: "relative",
    bottom: 10,
    right: -150,
  },
  inputBox: {
    width: 250,
    borderColor: "#FFFFFF",
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8,
    fontSize: 20,
    marginTop: 20,
  },
  error: {
    color: "red",
  },
});

export default AddTaskTest;
