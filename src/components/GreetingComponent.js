import React, { Component } from "react"; // import React and Component from react library
import { AppRegistry, StyleSheet, Text } from "react-native"; // import Text Component from react-native library

// Declare a Component named Greeting
export default class Greeting extends Component {
  render() {
    // If the message is empty, supply a default message
    let message =
      this.props.message == "" ? "Empty message" : this.props.message;

    // Render a Text Component with the message
    return (
      <Text style={this.props.style == "" ? styles.greeting : this.props.style}>
        {message}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  greeting: {
    fontSize: 30,
    textAlign: "center",
    margin: 5
  }
});

AppRegistry.registerComponent("Greeting", () => Greeting);
