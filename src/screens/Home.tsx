import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Button, TouchableOpacity, Image, TextInput } from "react-native";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

interface IToDo {
  text: string;
  completed: boolean;
  date: string;
}

const ListViewTest = () => {
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const handleSubmit = (): void => {
    if (value.trim()) setToDos([...toDoList, { text: value, completed: false, date: new Date().toLocaleString() }]);
    else showError(true);
    setValue("");
  };

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header></Header>
      <View style={styles.bodyTop}>
        {/* {toDoList.length === 0 && (
          <Text style={{ color: "#A7CBD9" }}>No to do task available</Text>
        )}
        {toDoList.map((toDo: IToDo, index: number) => (
          <View style={styles.ListItem} key={`${index}_${toDo.text}`}>
            <Text>{toDo.text}</Text>
            <Text>{toDo.date}</Text>
            <TouchableOpacity
              onPress={() => {
                removeItem(index);
              }}
            >
              <Text style={{ color: "crimson" }}>Erase</Text>
            </TouchableOpacity>
          </View>
        ))} */}
        <ListItem></ListItem>
        <ListItem></ListItem>
      </View>
      <View style={styles.bodyBottom}>
        <TouchableOpacity style={styles.button}>
          <Text> Tasks For Today </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> Calander View </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> List All Tasks </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text> Logout </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundButton}>
          <Image style={styles.imagebutton} source={require("./../../assets/images/fabImage.png")}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        {/* <TextInput
          placeholder="Enter your todo task..."
          value={value}
          onChangeText={(e) => {
            setValue(e);
            showError(false);
          }}
          style={styles.inputBox}
        /> */}
        {/* <TouchableOpacity style={styles.roundButton} onPress={handleSubmit}>
          <Image
            style={styles.imagebutton}
            source={require("./../../assets/images/fabImage.png")}
          ></Image>
        </TouchableOpacity> */}
      </View>
      {/* {error && (
        <Text style={styles.error}>Error: Input field is empty...</Text>
      )} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "column",
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
  bodyTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
  },
  bodyBottom: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
  },
  footer: {
    backgroundColor: "#eee",
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
    height: 300,
    position: "relative",
    top: 0,
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
  ListItem: {
    width: "70%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    margin: 10,
    borderRadius: 10,
  },
  inputBox: {
    width: 250,
    borderColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8,
    fontSize: 20,
    position: "relative",
    right: 15,
    top: 25,
  },
  error: {
    color: "red",
  },
});

export default ListViewTest;
