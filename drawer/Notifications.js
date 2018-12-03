import React, { Component } from "react";
import { ImageBackground, View, Image, StyleSheet } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

class NotificationScreen extends Component {
  constructor() {
    super();
    this.handlepress = this.handlepress.bind(this);
  }
  static navigationOptions = () => ({
    title: "Notifications",
    drawerIcon: () => (
      <Image
        source={require("./Images/notification.png")}
        style={styles.Icon}
      />
    )
  });
  handlepress() {
    this.props.navigation.navigate("Home1");
  }
  render() {
    return (
      <ImageBackground
        source={require("./Images/touch.jpg")}
        style={{ width: "100%", height: "100%", opacity: 0.8 }}
      >
        <View style={styles.container}>
          <AwesomeButton
            backgroundColor="#099fff"
            style={styles.button}
            onPress={this.handlepress}
          >
            Go Back
          </AwesomeButton>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "black",
    fontSize: 20
  },
  Icon: {
    width: 24,
    height: 24
  }
});

export default NotificationScreen;
