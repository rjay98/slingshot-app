import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.contentContainer}>
          <Button
            title="Personal" 
            onPress={() => navigate('Personal')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'gear', type: 'font-awesome'}}
          />
          <Button
            title="Banking" 
            onPress={() => navigate('Banking')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'bank', type: 'font-awesome'}}
          />
          <Button
            title="About" 
            onPress={() => navigate('About')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'question', type: 'font-awesome'}}
          />
          <Button
            title="Legal" 
            onPress={() => navigate('Legal')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'file-text', type: 'font-awesome'}}
          />
          <Button
            title="Logout" 
            onPress={() => navigate('Login')}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            raised={true}
            icon={{name: 'sign-out', type: 'font-awesome'}}
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
  },
  button: {
    width: 300,
    height: 45,
    marginTop: 10,
    backgroundColor: '#2196f3'
  },
  buttonTitle: {
    lineHeight: 40,
    color: '#fff',
    fontSize: 20
  }
});
