import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.half1}>
		
		</View>
        <View style={styles.half2}>
		<View style={styles.half21}>
		</View>
		<View style={styles.half22}>
		</View>
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // flexDirection:  'row'
  },

  half1: {

    flex: 1,
    backgroundColor: "red"
  },
  half2: {

    flex: 1,
    backgroundColor: "blue"
  },
  half21: {
    flex: 1,
    backgroundColor: "green"
  },
  half22: {
    flex: 1,
    backgroundColor: "black"
  }
});
