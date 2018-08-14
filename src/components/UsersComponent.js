import React, { Component } from "react"; // import React and Component from react library
import {
  AppRegistry,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native"; // import Text Component from react-native library

// Declare a Component named Users
export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };
  }

  getUsers() {
    return fetch(this.props.usersURL)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            users: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Use the componentDidMount function to acquire data from a URL
  componentDidMount() {
    return this.getUsers();
  }

  // The data structure contains a key named 'id'
  // here we tell the FlatList the key property
  // we need to convert the id to a String from a number
  _keyExtractor = (item, index) => String(item.id);

  // Handle the onPress event from a list item
  // Simply display an alert with the name property
  _onPress = item => {
    this.props.navigation.navigate("UserDetails", { user: item });
  };

  _renderItem = ({ item }) => (
    <TouchableHighlight onPress={() => this._onPress(item)}>
      <View>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.itemsub}>{item.email}</Text>
      </View>
    </TouchableHighlight>
  );
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    // Render a FlatList Component with the array of users stored in usersLocal
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
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
