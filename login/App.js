/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChangeText= this.handleChangeText.bind(this)
  }
handleChangeText(newText){
this.setState=({
  value: newText
})
}
  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize: 40}}> Login </Text> 
        <TextInput
        style={{height: 40}}
        placeholder="UserName"
         onChangeText={this.handleChangeText} />
         

        <TextInput
        style={{height: 40}}
         placeholder="Password"
         onChangeText={this.handleChangeText} />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83F3C3',
    justifyContent: "center",
    alignItems: "center",
  }
});
