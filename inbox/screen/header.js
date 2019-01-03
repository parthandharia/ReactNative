import React from "react";
import { View, Text, Image } from "react-native";
import img from "../images/list.png";
import sr from "../images/search.png";

const Header = () => {
  const { text, viewstyle, image, search } = styles;
  return (
    <View style={viewstyle}>
      <Image source={img} style={image} />
      <Text style={text}> Inbox </Text>
      <Image source={sr} style={search} />
    </View>
  );
};

const styles = {
  text: {
    fontSize: 22,
    paddingLeft: 20,
    paddingRight: 200
  },
  image: {
    height: 30,
    width: 30
  },
  search: {
    margin: 2,
    height: 28,
    width: 28
  },
  viewstyle: {
    backgroundColor: "#94BDCC",
    height: 45,
    paddingTop: 8,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: "relative",
    flexDirection: "row"
  }
};
export default Header;
