import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert
} from "react-native";
import ValidationComponent from "react-native-form-validator";
import background from "../../image/background.jpg";
const na = /^[a-zA-Z][a-zA-Z ]*$/;
class SignUp extends ValidationComponent {
  state = {
    name: "",
    email: "",
    password: "",
    repassword: ""
  };
  handlepress = () => {
    if (
      this.validate({ name: { minlength: 3, maxlength: 7, required: true } }) &&
      na.test(this.state.name) === true
    ) {
      if (this.validate({ email: { email: true } })) {
        if (
          this.validate({
            password: { minlength: 3, maxlength: 7, required: true }
          })
        ) {
          if (
            this.validate({
              repassword: { minlength: 3, maxlength: 7, required: true }
            })
          ) {
            if (this.state.password == this.state.repassword) {
              Alert.alert("welcome");
            } else {
              Alert.alert("password can't match");
            }
          } else {
            Alert.alert("enter valide password");
          }
        } else {
          Alert.alert("enter valide Password");
        }
      } else {
        Alert.alert("enter valide Email");
      }
    } else {
      Alert.alert("enter valide UserName");
    }
  };
  clickme = () => {
    Alert.alert("click me");
  };
  render() {
    return (
      <ImageBackground source={background} style={[styles.picture]}>
        <View style={styles.mainview}>
          <View style={styles.headerview}>
            <Text style={styles.headertext}> SIGN UP </Text>
          </View>

          <View style={styles.pageview}>
            <Text style={styles.text}>USERNAME</Text>
            <TextInput
              style={styles.Edit}
              ref="name"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
            <Text style={styles.text}>EMAIL</Text>
            <TextInput
              style={styles.Edit}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <Text style={styles.text}>PASSWORD</Text>
            <TextInput
              style={styles.Edit}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />

            <Text style={styles.text}>CONFIRM PASSWORD</Text>
            <TextInput
              style={styles.Edit}
              secureTextEntry={true}
              onChangeText={repassword => this.setState({ repassword })}
              value={this.state.repassword}
            />
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10
            }}
          >
            <TouchableOpacity onPress={this.handlepress}>
              <View style={styles.ovalshapeview}>
                <Text style={{ color: "#fff", fontSize: 20 }}>CONFIRM</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingTop: 10
            }}
          >
            <Text style={{ color: "#fff" }}>already user? </Text>
            <Text
              onPress={this.clickme}
              style={{ textDecorationLine: "underline", color: "#fff" }}
            >
              click me
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingTop: 50,
              paddingBottom: 10
            }}
          >
            <Text style={{ color: "#fff", paddingRight: 15 }}>
              PRIVACY POLICE{" "}
            </Text>
            <Text style={{ color: "#fff" }}>TERMS OF SERVICE</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  textcomp: {},
  mainview: {
    flex: 1
  },
  headerview: {
    justifyContent: "center",
    alignItems: "center",
    height: "15%"
  },
  headertext: {
    fontFamily: "times new roman",
    fontWeight: "bold",
    fontSize: 36,
    color: "#fff",
    alignItems: "baseline"
  },
  pageview: {
    paddingLeft: 40,
    paddingRight: 40
  },
  text: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "flex-start",
    color: "#fff"
  },
  Edit: {
    borderRadius: 30,
    backgroundColor: "#fff",
    opacity: 0.5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 5
  },
  ovalshapeview: {
    height: 40,
    width: 150,
    backgroundColor: "#099fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
    marginBottom: 10,
    borderRadius: 50
  },
  picture: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.8
  }
});
export default SignUp;
