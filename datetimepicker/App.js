import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { formatDateTime } from "./api";

export default class App extends Component {
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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Date:</Text>

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
  text: {
    fontSize: 30
  },
  bordertop: {
    borderColor: "#edeeef",
    borderTopWidth: 0.3
  }
});
