import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  static navigatorOptions = {
    tabBarHidden: true
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Slingshot</Text>
        <View style={styles.formContainer}>
          <FormLabel>Username</FormLabel>
          <FormInput inputStyle={styles.inputStyle}/>
          <FormLabel>Password</FormLabel>
          <FormInput
            inputStyle={styles.inputStyle}
            secureTextEntry={true}
          />
          <Button 
            title='Login'
            onPress={() => navigate('Home')}
            buttonStyle={styles.loginButton}
            titleStyle={styles.loginTitle}
          />
        </View>
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
  },
  formContainer: {
    marginTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  inputStyle: {
    flexDirection: 'row',
  },
  loginButton: {
    marginTop: 20,
    width: 200,
    height: 46,
    backgroundColor: '#2196f3'
  },
  loginTitle: {
    lineHeight: 40,
    color: '#fff',
    fontSize: 20
  }
});
