import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class Portfolio extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <Card title='Portfolio Value'>
          <Text style={styles.value}>123,035.23 USD</Text>
        </Card>
        <Card title='Available Funds'>
          <Text style={styles.value}>473.74 USD</Text>
        </Card>
        <Card title='Invested'>
          <Text style={styles.value}>6374.88 USD</Text>
        </Card>
        <Card title='Return on Interest (ROI)'>
          <Text style={styles.value}>19,300%</Text>
        </Card>
        <Button
          title="Analytics" 
          onPress={() => navigate('Analytics')}
          buttonStyle={styles.button}
          titleStyle={styles.title}
          raised={true}
          icon={{name: 'bar-chart', type: 'font-awesome'}}
        />
      </View>
    )
  }
}

const styles = {
  wrapper: {
    width: 370,
    height: 240,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  value: {
    color: '#0069c0',
    textAlign: 'center',
    fontSize: 25,
  },
  roi: {
    color: '#0d47a1',
    textAlign: 'center',
    fontSize: 40
  },
  analytics: {
    fontSize: 15,
  },
  button: {
    marginTop: 20,
    height: 46,
    backgroundColor: '#2196f3'
  },
  title: {
    lineHeight: 40,
    color: '#fff',
    fontSize: 20
  }
}