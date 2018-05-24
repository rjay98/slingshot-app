import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon, SearchBar } from 'react-native-elements';
import { StockData } from './stockData';

export default class Investments extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <Button
          title="Analytics" 
          onPress={() => navigate('Analytics')}
          buttonStyle={styles.button}
          titleStyle={styles.title}
          raised={true}
          icon={{name: 'bar-chart', type: 'font-awesome'}}
        />
        <Card>
          <SearchBar
            lightTheme
            containerStyle={{ backgroundColor: '#fff', borderColor: '#fff' }}
            placeholder='Search Investments...' />
        </Card>
        <StockData name="Rori's Soccer" price="6823.24" quantity="20"/>
        <StockData name="CanadaExpress (CNEX)" price="273.54" quantity="2"/>
        <StockData name="CapitalTwo (CT)" price="392.02" quantity="50"/>
      </View>
    )
  }
}

const styles = {
  wrapper: {
    width: 370,
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginBottom: 200
  },
  valueLabel: {
    color: '#777',
    textAlign: 'center'
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
  },
  buttonTitle: {
    color: '#fff'
  }
}