import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

import { db } from "../../firebase/firebase";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

// ?Suppress Warning
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

const deleteData = async (todo: IToDo) => {
  await deleteDoc(doc(db, "toDoTest", todo.text));
};

interface IToDo {
  text: string;
  completed: boolean;
  date: String;
  priority: String;
  note: String;
}

var newToDoList: IToDo[] = [];
const ScrollViewScreen = () => {
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const removeItem = (todoItem: IToDo): void => {
    deleteData(todoItem);
    getData();
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "toDoTest"));
    // toDoList.splice(0, toDoList.length);
    newToDoList = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      // toDoList.push(doc.data() as IToDo);
      newToDoList.push(doc.data() as IToDo);
      setToDos([...toDoList, doc.data() as IToDo]);
    });
    console.log(newToDoList);
  };

  useEffect(() => {
    // Run On Page Load
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header></Header>
      <ScrollView>
        <View style={[styles.content]}>
          {newToDoList.length === 0 && <Text style={{ color: "#A7CBD9" }}>No to do task available</Text>}
          {newToDoList.map((toDo: IToDo) => (
            <View style={styles.ListItem} key={toDo.text}>
              <Text>{toDo.text}</Text>
              <Text>{toDo.date}</Text>
              <Text>{toDo.priority}</Text>
              <TouchableOpacity
                onPress={() => {
                  removeItem(toDo);
                }}
              >
                <Text style={{ color: "crimson" }}>Erase</Text>
              </TouchableOpacity>
            </View>
          ))}
          {/* <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem> */}
        </View>
      </ScrollView>
      <View style={[styles.footer]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    height: 40,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#03A9F4",
    zIndex: 10,
  },
  content: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40,
  },
  footer: {
    height: 40,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#eee",
  },
  ListItem: {
    width: "70%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    margin: 10,
    borderRadius: 10,
  },
});

export default ScrollViewScreen;
