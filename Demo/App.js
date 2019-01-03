/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Grid from "./screen/grid";

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.titleBarCss}>
          <Text style={{ fontSize: 26, color: "#fff" }}>
            User Signup Report
          </Text>
        </View>
        <Grid />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  titleBarCss: {
    backgroundColor: "#0d60e3",
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20
  }
});
