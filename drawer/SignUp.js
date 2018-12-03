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
import DateTimePicker from "react-native-modal-datetime-picker";
import { formatDateTime } from "./api";

class SignUp extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }
  static navigationOptions = {
    title: "SignUp",
    drawerIcon: () => (
      <Image source={require("./Images/signup.png")} style={styles.Icon} />
    )
  };

  state = {
    showDatePicker: null,
    date: ""
  };
  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  };

  handleDatePicked = date => {
    this.setState({ date: date });
    this.handleDatePickerHide();
  };

  handleDatePickerHide = () => {
    this.setState({ showDatePicker: "false" });
  };

  handleLogin() {
    this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <ImageBackground
        source={require("./Images/signup1.jpg")}
        style={{ width: "100%", height: "100%", opacity: 0.7 }}
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
            style={[styles.text, styles.bordertop]}
            placeholder="Select Date"
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
            onCancel={this.handleDatePickerHide}
          />
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
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
    color: "black",
    fontSize: 30
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
