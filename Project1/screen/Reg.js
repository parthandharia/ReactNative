import React, { Component } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableHighlight
} from "react-native";
import Second from "./Second";
import ValidationComponent from "react-native-form-validator";
const na = /^[a-zA-Z][a-zA-Z ]*$/;
export default class Reg extends ValidationComponent {
  state = {
    name: "",
    email: "",
    number: "",
    password: ""
  };

  onPressButton = () => {
    if (
      this.validate({ name: { minlength: 3, maxlength: 7, required: true } }) &&
      na.test(this.state.name) === true
    ) {
      if (this.validate({ email: { email: true } })) {
        if (
          this.validate({
            number: { numbers: true, minlength: 9, maxlength: 10 }
          })
        ) {
          if (
            this.validate({
              password: { minlength: 3, maxlength: 7, required: true }
            })
          ) {
            this.props.navigation.navigate("Second");
          } else {
            alert("enter valide password");
          }
        } else {
          alert("enter valide Number");
        }
      } else {
        alert("enter valide Email");
      }
    } else {
      alert("enter valide Name");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}> Name:</Text>
          <TextInput
            style={styles.input}
            ref="name"
            placeholder="Name"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />

          <Text style={styles.text}>Email:</Text>
          <TextInput
            style={styles.input}
            ref="email"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />

          <Text style={styles.text}> Mobile No:</Text>
          <TextInput
            style={styles.input}
            ref="number"
            placeholder="Number"
            onChangeText={number => this.setState({ number })}
            value={this.state.number}
          />
          <Text style={styles.text}> Password:</Text>
          <TextInput
            style={styles.input}
            ref="password"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <TouchableHighlight
            style={{ paddingTop: 10 }}
            onPress={this.onPressButton}
          >
            <Text style={{ fontSize: 24 }}>Submit</Text>
          </TouchableHighlight>
        </View>
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
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 16
  },
  text: {
    fontSize: 20
  }
});
