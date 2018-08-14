import React, { Component } from "react";
import { View, Button } from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Users List"
        onPress={() => this.props.navigation.push("Users")}
      />
    );
  }
}
