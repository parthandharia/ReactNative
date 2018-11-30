import React, { Component } from "react";
import { ImageBackground, View, Image, Button, StyleSheet } from "react-native";

class NotificationScreen extends Component {
  constructor() {
    super();
    this.handlepress = this.handlepress.bind(this);
  }
  static navigationOptions = () => ({
    title: "Notifications",
    drawerIcon: () => (
      <Image source={require("./Images/parth.jpg")} style={styles.Icon} />
    )
  });
  handlepress() {
    this.props.navigation.navigate("Home1");
  }
  render() {
    return (
      <ImageBackground
        source={require("./Images/touch.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Button onPress={this.handlepress} title="Go Back" />
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
  Icon: {
    width: 24,
    height: 24
  }
});

export default NotificationScreen;
