import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export const StockData = ({ name, price, quantity }) => (
  <Card title={name}>
    <Text style={styles.valueLabel}>Price Per Share</Text>
    <Text style={styles.value}>{price} USD</Text>
    <Button raised title='Buy' backgroundColor='#2196f3' color='#fff' style={{ marginTop: 10 }} />
    <Button raised title='Sell' backgroundColor='#43a047' color='#fff' style={{ marginTop: 5, marginBottom: 10 }} />
  </Card>
)

const styles={
  valueLabel: {
    color: '#777',
    textAlign: 'center'
  },
  value: {
    color: '#0069c0',
    textAlign: 'center',
    fontSize: 25,
  },
}