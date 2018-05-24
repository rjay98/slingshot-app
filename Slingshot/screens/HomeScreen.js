import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Portfolio from '../components/analytics/portfolio';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.contentContainer}>
          <Portfolio navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    height: 100,
    backgroundColor: '#1976d2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { height: 2 }
  },
  contentContainer: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    color: '#fff',
    marginTop: 30,
    fontSize: 25,
  }
});
