import { StyleSheet, View } from "react-native";
import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUP";
import { BottomNavigator } from "./src/navigator/bottomNavigator";
import AddTaskScreen from "./src/screens/AddTask";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="login" component={LoginScreen} />
        <MainStack.Screen name="signUp" component={SignUpScreen} />
        <MainStack.Screen name="bottomNav" component={BottomNavigator} />
        <MainStack.Screen name="addTask" component={AddTaskScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
