import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Users from "./src/components/UsersComponent";

export default class FirstApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Users />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#FFFFFF"
  }
});
