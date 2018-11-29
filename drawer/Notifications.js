import React, { Component } from "react";
import { StyleSheet, View, Image, Button } from "react-native";

class NotificationScreen extends Component {
  constructor() {
    super();
    this.handlepress = this.handlepress.bind(this);
  }
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: () => (
      <Image source={require("./Images/parth.jpg")} style={styles.Icon} />
    )
  };
  handlepress() {
    this.props.navigation.navigate("Home1");
  }
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handlepress} title="Go Back" />
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

export default NotificationScreen;
