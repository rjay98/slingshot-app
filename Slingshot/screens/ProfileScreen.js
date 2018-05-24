import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.contentContainer}>
          <Button
            large
            title="Settings" 
            onPress={() => navigate('Settings')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'bar-chart', type: 'font-awesome'}}
          />
          <Button
            large
            title="Banking" 
            onPress={() => navigate('Banking')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'bar-chart', type: 'font-awesome'}}
          />
          <Button
            large
            title="About Us" 
            onPress={() => navigate('About Us')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'bar-chart', type: 'font-awesome'}}
          />
          <Button
            large
            title="Legal" 
            onPress={() => navigate('Legal')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'bar-chart', type: 'font-awesome'}}
          />
          <Button
            large
            title="Logout" 
            onPress={() => navigate('Logout')}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            raised={true}
            icon={{name: 'bar-chart', type: 'font-awesome'}}
          />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    marginTop: 30,
    fontSize: 25,
  },
  button: {
    width: 200,
    marginTop: 10,
    backgroundColor: '#2196f3'
  },
  buttonTitle: {
    lineHeight: 40,
    color: '#fff',
    fontSize: 20
  }
});
