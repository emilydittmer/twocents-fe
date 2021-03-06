import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings',
      headerStyle: {
        backgroundColor: '#2C2540',
        borderBottomWidth: 0,
    },
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2540',
    alignItems: 'center',
    paddingTop: 50
  },
  text: {
    color: '#EE933F',
    fontSize: 30,
  }
});