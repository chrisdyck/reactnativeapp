import React, { Component } from "react"; // import React and Component from react library
import { AppRegistry, StyleSheet, Text, Image, View } from "react-native";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _onPressPhone = phone => {
    alert(phone);
  };

  render() {
    const { navigation } = this.props;
    const user = navigation.getParam("user", {
      name: "No User",
      email: "No Email"
    });

    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://media.istockphoto.com/photos/confident-business-woman-looking-at-the-camera-picture-id813812174"
          }}
          style={{ width: 400, height: 400 }}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.company.name}</Text>
        <Text>
          {user.address.street}
          {", "}
          {user.address.suite}
        </Text>
        <Text>
          {user.address.city}
          {", "}
          {user.address.zipcode}
        </Text>
        <Text>{user.website}</Text>
        <Text onPress={() => this._onPressPhone(user.phone)}>{user.phone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  name: {
    fontSize: 20,
    padding: 10
  }
});

AppRegistry.registerComponent("UserDetails", () => UserDetails);
