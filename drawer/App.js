import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  ImageBackground
} from "react-native";
import { DrawerNavigator } from "react-navigation";

class HomeScreen extends Component {
  static navigationOptions = {
    dreawerLable: "Home",
    drawerIcon: () => (
      <Image source={require("./Images/parth.jpg")} style={styles.Icon} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./Images/backgroud2.jpg")}
          style={{ width: "100%", height: "90%" }}
        />
        <Text> Home Page</Text>
      </View>
    );
  }
}

class NotificationScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: () => (
      <Image source={require("./Images/parth.jpg")} style={styles.Icon} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.props.navigation.navigate("go back")}
          title="Go Back"
        />
      </View>
    );
  }
}

class LoginPage extends Component {
  static navigationOptions = {
    dreawerLable: "Login",
    drawerIcon: () => (
      <Image source={require("./Images/parth.jpg")} style={styles.Icon} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./Images/backgroud1.jpg")}
          style={{ width: "100%", height: "90%" }}
        />
        <Text style={{ fontsize: "60dp" }}> Login Page </Text>
      </View>
    );
  }
}

class SignUpPage extends Component {
  static navigationOptions = {
    dreawerLable: "SignUp",
    drawerIcon: () => (
      <Image source={require("./Images/parth.jpg")} style={styles.Icon} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./Images/backgroud1.jpg")}
          style={{ width: "100%", height: "90%" }}
        />
        <Text> SignUp Page </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Icon: {
    width: 24,
    height: 24
  }
});

export default DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Notifications: {
      screen: NotificationScreen
    },
    Login: {
      screen: LoginPage
    },
    SignUp: {
      screen: SignUpPage
    }
  },
  {
    drawerPosition: "left",
    initialRouteName: "Notifications",
    drawerBackgroundColor: "#ffffff",
    drawerWidth: 200
  }
);
