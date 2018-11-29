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
  static navigationOptions = {
    dreawerLable: "Home",
    drawerIcon: () => (
      <Image source={require("./Images/parth.jpg")} style={styles.Icon} />
    )
    // headerLeft: (
    //   <View style={{ paddingHorizontal: 10 }}>
    //     <TouchableOpacity onpress={() => this.navigationOptions.openDrawer()}>
    //       <Icon name="drawer" size={35} color="green" />
    //     </TouchableOpacity>
    //   </View>
    // )
  };
  handlepress() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2353F0"
  },
  Icon: {
    width: 24,
    height: 24
  }
});
export default Home;
