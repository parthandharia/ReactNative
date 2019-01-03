import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image
} from "react-native";
import not from "../images/bend.png";
import tru from "../images/true.png";
import web from "../images/web.png";

const data = [
  { id: "a", value1: "300", value2: "Total", img: web },
  { id: "b", value1: "0", value2: "Today", img: tru },
  { id: "c", value1: "3", value2: "Weekly", img: not },
  { id: "d", value1: "54", value2: "Monthly", img: not }
];
const numColumns = 2;
const size = Dimensions.get("window").width / numColumns;

export default function Grid() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.main}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Text style={styles.txt}>{item.value1}</Text>
              <Text style={styles.txt1}>{item.value2}</Text>
              <View
                style={{
                  alignItems: "flex-end",
                  //backgroundColor: "#0d60e3",
                  borderRadius: 100,
                  paddingRight: 33,
                  paddingTop: 10
                }}
              >
                <View style={styles.vi}>
                  <Image style={styles.img} source={item.img} />
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 165,
    height: 140,
    flexDirection: "column",
    shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    borderRadius: 7
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: "#fff"
  },
  txt: {
    paddingTop: 8,
    paddingLeft: 8,
    fontSize: 22,
    fontWeight: "bold",
    color: "black"
  },
  txt1: {
    paddingTop: 3,
    paddingLeft: 8,
    fontSize: 22,
    color: "#0d60e3"
  },
  main: {
    paddingTop: 6,
    paddingLeft: 10

    //paddingBottom: 10
  },
  img: {
    height: 30,
    width: 30,
    tintColor: "#fff"
  },
  vi: {
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D60E3",
    position: "absolute",
    // bottom: 10,
    right: 20
  }
});
