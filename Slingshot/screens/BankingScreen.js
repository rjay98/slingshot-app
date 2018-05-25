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
          <Text style={styles.title}>Banking</Text>
        </View>
        <View style={styles.contentContainer}>
          <Button
            title="Transfer to Slingshot" 
            onPress={() => navigate('TransferToSlingshot')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'long-arrow-left', type: 'font-awesome'}}
          />
          <Button
            title="Transfer to Bank Account" 
            onPress={() => navigate('TransferToBank')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'long-arrow-right', type: 'font-awesome'}}
          />
          <Button
            title="Add Account" 
            onPress={() => navigate('About Us')}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'library-add', type: 'material'}}
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
    backgroundColor: '#ffa726'
  },
  buttonTitle: {
    lineHeight: 40,
    color: '#fff',
    fontSize: 20
  }
});
