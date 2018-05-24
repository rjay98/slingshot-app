import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Category from '../components/company/category';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Discover',
    headerLeft: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.company}>Company Cards</Text>
        <Category navigation={this.props.navigation} />
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
    fontSize: 30,
    textAlign: 'left',
    textAlignVertical: 'top',
    margin: 10,
  },
  company: {
    fontSize: 20,
    textAlign: 'left',
    paddingTop: 5,
    paddingLeft: 10,
  }
});