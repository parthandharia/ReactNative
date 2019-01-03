/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./screen/header.js";
import AlbumDetail from "./screen/AlbumDetail.js";

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text style={styles.txt}> Today </Text>
        <AlbumDetail />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    paddingLeft: 3,
    paddingTop: 5
  }
});
