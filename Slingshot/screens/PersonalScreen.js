import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

export default class PersonalScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Personal</Text>
        </View>
        <View style={styles.contentContainer}>
          <Button
            title="Personal Information" 
            onPress={() => {return }}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            raised={true}
            icon={{name: 'id-card', type: 'font-awesome'}}
          />
          <View style={{ width: 300, backgroundColor: '#fff', paddingVertical: 30 }}>
            <FormLabel>First Name</FormLabel>
            <FormInput value='John' containerStyle={{ width: "75%" }}/>
            <FormLabel>Last Name</FormLabel>
            <FormInput value='Smith' containerStyle={{ width: "75%" }}/>
            <FormLabel>Phone Number</FormLabel>
            <FormInput value='(012) 345 - 6789' containerStyle={{ width: "75%" }}/>
          </View>
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
