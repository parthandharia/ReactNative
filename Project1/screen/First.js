import React, { Component } from "react";
import { View, Text } from "react-native";
import Second from "./Second";

class First extends Component {
  // handlepress = () => {
  //   this.props.navigation.navigate("Second");
  // };
  render() {
    return (
      <View>
        <Text
          style={{
            alignItems: "center",
            fontSize: 20,
            justifyContent: "center"
          }}
        >
          First Screen
        </Text>

        <Second message="parth Andhariya" />
      </View>
    );
  }
}
export default First;
