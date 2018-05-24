import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import company from '../components/company/company.js';
import Category from '../components/company/category';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Discover',
    headerLeft: null,
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>Discover</Text>
        </View>
        <Category />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 25,
  },
  company: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 5,
    paddingLeft: 10,
  },
  titleContainer: {
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
