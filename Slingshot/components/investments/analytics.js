import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

export default class Analytics extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <Card title='Top Performing Investments'>
          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#00c853', fontWeight: 'bold'}}>
                Sarah Lauren Culinary (SLC)
              </Text>
              <Text style={{ color: '#00c853', alignSelf: 'flex-end' }}>
                +417.24%
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#00c853', fontWeight: 'bold'}}>
                RecruitMePls (RMP)
              </Text>
              <Text style={{ color: '#00c853', alignSelf: 'flex-end' }}>
                +317.89%
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#00c853', fontWeight: 'bold'}}>
                CapitalTwo (CT)
              </Text>
              <Text style={{ color: '#00c853', alignSelf: 'flex-end' }}>
                +153.23%
              </Text>
            </View>
          </View>
        </Card>
        <Card title='Worst Performing Investments'>
          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#f44336', fontWeight: 'bold'}}>
                Sucking Up To Valentino (SUV)
              </Text>
              <Text style={{ color: '#f44336', alignSelf: 'flex-end' }}>
                -125.34%
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#f44336', fontWeight: 'bold'}}>
                Bori's Soccer (BS)
              </Text>
              <Text style={{ color: '#f44336', alignSelf: 'flex-end' }}>
                -87.22%
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#f44336', fontWeight: 'bold'}}>
                CanadaExpress (CNEX)
              </Text>
              <Text style={{ color: '#f44336', alignSelf: 'flex-end' }}>
                -27.02%
              </Text>
            </View>
          </View>
        </Card>
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