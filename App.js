import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Greeting from "./src/components/GreetingComponent";
import OrderTaker from "./src/components/OrderTakerComponent";

export default class FirstApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello world!</Text>
        <Greeting style={styles.welcomesmall} message="" />
        <Greeting message="Here is a new greeting!" />
        <OrderTaker />
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  welcomesmall: {
    fontSize: 8,
    textAlign: "center",
    margin: 10
  }
});
