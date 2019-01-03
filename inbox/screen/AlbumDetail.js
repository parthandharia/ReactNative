//functional Component

import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Data from "./data.js";
import { StyleSheet, FlatList } from "react-native";
import Image1 from "../images/parth.jpg";
import star from "../images/star.png";
const AlbumDetail = () => {
  return (
    <FlatList
      data={[
        {
          id: "1",
          title: "ABC123",
          hour: "2h",
          line1: "drone",
          line2: "hello",
          iconImage: Image1,
          star: star
        },
        {
          id: "2",
          title: "ABC123",
          hour: "2h",
          line1: "drone",
          line2: "Amazon 1250",
          iconImage: Image1,
          star: star
        },
        {
          id: "3",
          title: "ABC123",
          hour: "2h",
          line1: "drone",
          line2: "Amazon 1250",
          iconImage: Image1,
          star: star
        },
        {
          id: "4",
          title: "ABC123",
          hour: "2h",
          line1: "drone",
          line2: "Amazon 1250",
          iconImage: Image1,
          star: star
        }
      ]}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.con}>
            <View style={styles.thumbnailContainer}>
              <Image style={styles.thumbnailimage} source={item.iconImage} />
            </View>
            <View style={styles.header}>
              <Text style={styles.headertext}>{item.title}</Text>

              <Text>{item.line1}</Text>
              <Text>{item.line2}</Text>
            </View>
          </View>
          <View style={styles.coloum}>
            <Text style={styles.hour}>{item.hour}</Text>
            <Text>{""}</Text>
            <Image style={styles.star} source={item.star} />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headertext: {
    fontSize: 18
  },
  thumbnailimage: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  image1: {
    height: 300,
    flex: 1,
    width: null
  },
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 7,
    marginTop: 5,
    flexDirection: "row"
  },
  con: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
    height: 70,
    width: 315
  },
  star: {
    height: 20,
    width: 20
  },
  row: {
    flexDirection: "row"
  },
  coloum: {
    flexDirection: "column",
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderColor: "#ddd",
    position: "relative"
  }
});
export default AlbumDetail;
