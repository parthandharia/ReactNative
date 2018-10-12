/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import photo from "./image/rn.png";

export default class Reactnative extends Component {
  
  render() {
    return (
      <View>
      <Text style={{fontSize: 30}}> Welcome To React Native</Text>
       <Image source={photo} style={{width: 450, height: 350}} /> 
      </View> 
    );
  }
}


