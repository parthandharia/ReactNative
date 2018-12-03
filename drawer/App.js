import { DrawerNavigator, StackNavigator } from "react-navigation";
import SignUp from "./SignUp";
import Home from "./Home.js";
import Login from "./Login.js";
import NotificationScreen from "./Notifications.js";

const MainScreen = StackNavigator({
  Home1: {
    screen: Home,
    navigationOptions: () => ({
      title: "Home"
    })
  },
  Notification: {
    screen: NotificationScreen
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
});

export default DrawerNavigator(
  {
    Home: {
      screen: MainScreen
    },

    Notification: {
      screen: NotificationScreen
    },
    SignUp: {
      screen: SignUp
    },
    Login: {
      screen: Login
    }
  },
  {
    drawerPosition: "left",
    drawerBackgroundColor: "#66FF33",
    drawerWidth: 200
  }
);
