import React, { Component } from "react"; // import React and Component from react library
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native"; // import Text Component from react-native library
// var users = require("../../data/users.json");
import users from "../../data/users.json";

// Build a local list of Users
// const users = [
//   { key: "1", name: "Chris" },
//   { key: "2", name: "John" },
//   { key: "3", name: "Jane" },
//   { key: "4", name: "Jimmy" },
//   { key: "5", name: "Kim" },
//   { key: "6", name: "Jill" },
//   { key: "7", name: "Jake" },
//   { key: "8", name: "Izaac" }
// ];

// Declare a Component named Users
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersLocal: users
    };
  }

  _keyExtractor = (item, index) => String(item.id);

  render() {
    // Render a FlatList Component with the array of users stored in usersLocal
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.usersLocal}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.itemsub}>{item.email}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 10,
    paddingBottom: 0,
    fontSize: 18,
    height: 44
  },
  itemsub: {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 10,
    fontSize: 14,
    height: 44
  }
});

AppRegistry.registerComponent("Users", () => Users);
