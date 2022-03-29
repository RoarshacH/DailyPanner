import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Fonts
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// Pages
import HomeScreen from "../screens/Home";
import ScrollViewScreen from "../screens/Scrolling";
import ManageAccount from "../screens/Manageaccountscreen";
import { LogoutScreen } from "../components/logoutScreen";

const Tab = createBottomTabNavigator();

export const BottomNavigator = ({ route }) => {
  const username = route.params.username;

  return (
    <Tab.Navigator
      initialRouteName={"home"}
      screenOptions={{
        tabBarStyle: { backgroundColor: "#4A57A3", paddingBottom: 2, paddingTop: 2 },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} options={{ title: "Home Screen", tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={"white"} /> }} initialParams={{ username: username }} />
      <Tab.Screen name="calendar" component={ManageAccount} options={{ title: "Calendar View", tabBarIcon: () => <FontAwesome name="calendar" size={24} color="white" /> }} />
      <Tab.Screen name="listView" component={ScrollViewScreen} options={{ title: "List All Tasks", tabBarIcon: ({ color }) => <FontAwesome5 name="list" size={24} color="white" /> }} />
      <Tab.Screen name="logout" component={LogoutScreen} options={{ title: "Profile", tabBarIcon: () => <Entypo name="log-out" size={24} color="white" /> }} />
    </Tab.Navigator>
  );
};
