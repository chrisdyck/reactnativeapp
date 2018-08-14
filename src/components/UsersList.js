import React, { Component } from "react"; // import React and Component from react library
import { AppRegistry, StyleSheet, View } from "react-native";

import Users from "./UsersComponent";

export default class UsersList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Users
          usersURL="https://jsonplaceholder.typicode.com/users"
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

AppRegistry.registerComponent("UsersList", () => UsersList);
