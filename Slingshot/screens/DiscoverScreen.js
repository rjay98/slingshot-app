import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Discover',
    headerLeft: null,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Discover</Text>
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
