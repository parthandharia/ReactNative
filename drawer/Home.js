import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons";
import AwesomeButton from "react-native-really-awesome-button";

class Home extends Component {
  constructor() {
    super();
    this.handlepress = this.handlepress.bind(this);
  }
  static navigationOptions = () => ({
    dreawerLable: "Home",
    drawerIcon: () => (
      <Image source={require("./Images/home.png")} style={styles.Icon} />
    ),
    headerleft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onpress={() => this.navigationOptions.openDrawer()}>
          <Icon source={require("./Images/list.png")} />
        </TouchableOpacity>
      </View>
    )
  });
  handlepress() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <ImageBackground
        source={require("./Images/home1.jpg")}
        style={{ width: "100%", height: "100%", opacity: 0.9 }}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 40 }}> Home Page</Text>
          <AwesomeButton
            backgroundColor="#099fff"
            style={styles.button}
            onPress={this.handlepress}
          >
            Open Drawer
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
  Icon: {
    width: 24,
    height: 24
  }
});
export default Home;
