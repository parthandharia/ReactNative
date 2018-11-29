import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

class SignUp extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }
  static navigationOptions = {
    drawerLabel: "SignUp",
    drawerIcon: () => (
      <Image source={require("./Images/parth.jpg")} style={styles.Icon} />
    )
  };

  handleLogin() {
    this.props.navigation.navigate("Login1");
  }
  render() {
    return (
      <ImageBackground
        source={require("./Images/background1.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={StyleSheet.container}>
          <Text style={styles.Text}>Username</Text>
          <TextInput
            style={styles.Text}
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={"none"}
            underlineColorAndroid="transparent"
            maxLength={25}
          />

          <Text style={styles.Text}>Mobile No</Text>
          <TextInput
            style={styles.edittext}
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={"none"}
            underlineColorAndroid="transparent"
            maxLength={25}
          />

          <Text style={styles.Text}>Email</Text>
          <TextInput
            style={styles.edittext}
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={"none"}
            underlineColorAndroid="transparent"
            maxLength={25}
          />

          <Text style={styles.Text}>BirthDate</Text>
          <TextInput
            style={styles.edittext}
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={"none"}
            underlineColorAndroid="transparent"
            maxLength={25}
          />

          <Text style={styles.Text}>Password</Text>
          <TextInput
            style={styles.edittext}
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={"none"}
            underlineColorAndroid="transparent"
            maxLength={25}
          />

          <Text style={styles.Text}>Re-Password</Text>
          <TextInput
            style={styles.edittext}
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={"none"}
            underlineColorAndroid="transparent"
            maxLength={25}
          />

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <AwesomeButton
              backgroundColor="#099fff"
              style={styles.button}
              onPress={this.handleLogin}
            >
              Signup
            </AwesomeButton>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    color: "white",
    padding: 50,
    backgroundColor: "#66ccff"
  },
  Text: {
    color: "white",
    fontSize: 20
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
export default SignUp;
