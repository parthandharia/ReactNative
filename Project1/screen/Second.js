import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

class Second extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     input: ""
  //   };
  //   this.handlepress = this.handlepress.bind(this);
  // }

  state = {
    hi: ""
  };

  render() {
    var student = [];

    for (let i = 0; i <= 10; i++) {
      student.push(<Text>{i} </Text>);
    }
    return (
      <View
        style={{
          backgroundColor: "#ffffcc",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          {this.props.message} Enter text below
        </Text>
        <TextInput
          placeholder="Write Somthing Here"
          onChangeText={text => this.setState({ hi: text })}
          style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
        />
        <Text> {this.state.hi}</Text>
        {student}
      </View>
    );
  }
}
// Second.defaultProps = {
//   name: "Enter text below:"
// };

export default Second;
