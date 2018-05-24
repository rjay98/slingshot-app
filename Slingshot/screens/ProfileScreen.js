import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerLeft: null,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  }
});
