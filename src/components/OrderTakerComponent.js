import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View } from "react-native";

export default class OrderTaker extends Component {
  constructor(props) {
    super(props);

    // Give an initial value to state.text
    this.state = { text: "" };

    // Set event handler for onChangeText
    this.handleTextChanged = this.handleTextChanged.bind(this);
  }

  // Event handler for onChangeText
  handleTextChanged(text) {
    this.setState({ text });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerinput}>
          <TextInput
            style={[styles.text, styles.textinput]}
            placeholder="Type here to translate!"
            multiline={true}
            numberOfLines={8}
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <View style={styles.ordersarea}>
          <Text style={styles.text}>Your Order</Text>
          <Text style={styles.ordertext}>
            {this.state.text
              .split(" ")
              .map(word => word + "\n")
              .join(" ")}
          </Text>
        </View>
      </View>
    );
  }
}

// Declare StyleSheet
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  containerinput: {
    height: 200
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    color: "#000000"
  },
  textinput: {},
  ordertext: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    margin: 5,
    color: "#000000",
    textAlign: "center"
  },
  ordersarea: {
    borderWidth: 1,
    borderColor: "#d6d7da",
    height: 200
  }
});

AppRegistry.registerComponent("OrderTaker", () => OrderTaker);
