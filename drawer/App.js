import { DrawerNavigator, StackNavigator } from "react-navigation";
import SignUp from "./SignUp";
import Home from "./Home.js";
import Login from "./Login.js";
import NotificationScreen from "./Notifications.js";

const MainScreen = StackNavigator({
  Home1: {
    screen: Home
  },
  Notification: {
    screen: NotificationScreen
  },
  Login1: {
    screen: Login
  },
  SignUp1: {
    screen: SignUp
  }
});

export default DrawerNavigator(
  {
    DontTouch: {
      screen: MainScreen
    },
    Home: {
      screen: Home
    },
    Notifications: {
      screen: NotificationScreen
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    drawerPosition: "left",
    initialRouteName: "Home",
    drawerBackgroundColor: "#FFFFFF",
    drawerWidth: 200
  }
);
