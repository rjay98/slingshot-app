import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, SocialIcon } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{}}>
          <Image
            style={{ width: 125, height: 125 }}
            source={require('../static/img/slingshot.png')}
          />
        </View>
        <Text style={styles.title}>Slingshot</Text>
        <View style={styles.formContainer}>
          <SocialIcon
            style={{ width: 350 }}
            title='Sign In With Facebook'
            button
            type='facebook'
          />
          <SocialIcon
            style={{ width: 350 }}
            title="Sign In With Twitter"
            button
            type='twitter'
          />
          <FormLabel>Username</FormLabel>
          <FormInput
            containerStyle={{ width: '90%' }}
            inputStyle={styles.inputStyle}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            containerStyle={{ width: '90%' }}
            inputStyle={styles.inputStyle}
            secureTextEntry={true}
          />
          <Button
            title='Login'
            icon={{name: 'sign-in', type: 'font-awesome'}}
            onPress={() => navigate('Home')}
            buttonStyle={styles.loginButton}
            titleStyle={styles.loginTitle}
            raised={true}
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
    width: '100%',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  inputStyle: {
  },
  loginButton: {
    width: 350,
    marginTop: 20,
    backgroundColor: '#2196f3'
  },
  loginTitle: {
    lineHeight: 40,
    color: '#fff',
    fontSize: 20
  }
});
