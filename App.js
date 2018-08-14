import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./src/components/HomeScreen";
import UsersList from "./src/components/UsersList";
import UserDetails from "./src/components/UserDetails";

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Users: {
    screen: UsersList
  },
  UserDetails: {
    screen: UserDetails
  }
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
