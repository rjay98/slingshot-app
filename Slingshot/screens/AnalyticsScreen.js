import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Analytics from '../components/investments/analytics';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Analytics</Text>
        </View>
        <ScrollView style={{ height: '100%' }}>
          <View style={styles.contentContainer}>
            <Analytics navigation={this.props.navigation}/>
          </View>
        </ScrollView>
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
