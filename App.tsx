import { StyleSheet, View } from "react-native";
import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUP";
import HomeScreen from "./src/screens/Home";
import ScrollViewScreen from "./src/screens/Scrolling";
import DashboardView from "./src/screens/Dashboard";
import ManageAccount from "./src/screens/Manageaccountscreen";
import Boxes from "./src/screens/Boxes";
import SpaceGameLayout from "./src/screens/SpaceGameLayout";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="login" screenOptions={{}}>
        <MainStack.Screen name="login" component={LoginScreen} />
        <MainStack.Screen name="signUp" component={SignUpScreen} />
        <MainStack.Screen name="home" component={HomeScreen} />
        <MainStack.Screen name="listScreen" component={ScrollViewScreen} />
      </MainStack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* //Uncomment the Screen that needs viewing and save the file  default is the Login Screen*/}
    //   {/* Some pages are relevent to our app some are experimental layouts */}
    //   <LoginScreen></LoginScreen>
    //   {/* <SignUpScreen></SignUpScreen> */}
    //   {/* <HomeScreen></HomeScreen> */}
    //   {/* <ScrollViewScreen></ScrollViewScreen> */}
    //   {/* <DashboardView></DashboardView> */}
    //   {/* <Boxes></Boxes> */}
    //   {/* <ManageAccount></ManageAccount> */}
    //   {/* <SpaceGameLayout></SpaceGameLayout> */}
    // </View>
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
