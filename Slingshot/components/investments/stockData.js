import React from 'react';
import { Text, View } from 'react-native';
import ActivityIndicator from 'react-native-activity-indicator';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';

export default class StockData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBuy: false,
      isSell: false,
      buyQuantity: 0,
      confirming: false,
    };
  }

  triggerBuy() {
    this.setState({isBuy: true, isSell: false});
  }

  triggerSell() {
    this.setState({isSell: true, isBuy: false});
  }

  render() {
    const { name, price, quantity, stockOwned } = this.props;
    return (
      <Card title={name}>
        <Text style={styles.valueLabel}>Price Per Share</Text>
        <Text style={styles.value}>{price} USD</Text>
        { stockOwned
          ? <View style={{ marginTop: 20 }}>
              <Text style={styles.valueLabel}>Stock Owned</Text>
              <Text style={styles.value}>{quantity}</Text>
            </View>
          : <View />
        }
        { this.state.confirming
          ? <View style={{ marginTop: 30, marginBottom: 30 }}>
              <ActivityIndicator color="#1565c0" size={35}/>
            </View>
          : <View />
        }
        { this.state.isBuy && !this.state.confirming
          ? <View style={{ marginTop: 20 }}>
              <Text style={styles.valueLabel}> Total Price: </Text>
              <Text style={styles.value}>{price*this.state.buyQuantity} USD</Text>
              <FormLabel >Quantity</FormLabel>
              <FormInput
                ref={input => this.buyQuantity = input}
                onChangeText={(text) => this.setState({buyQuantity: text})}
              />
              <Button
                style={{ marginTop: 10 }}
                backgroundColor='#00c853'
                title='Confirm'
                onPress={() => {
                  this.setState({
                    confirming: true,
                    isBuy: false,
                    isSell: false,
                    quantity: 0
                  });
                  setTimeout(() => {
                    this.setState({ confirming: false });
                    alert('Your transaction was executed.');
                  }, 1200);
                }}
              />
              <Button
                style={{ marginTop: 10 }}
                backgroundColor='#f4511e'
                title='Cancel'
                onPress={() => this.setState({
                  confirming: false,
                  isBuy: false,
                  isSell: false,
                  buyQuantity: 0}
                )}
              />
            </View>
          : <View>
              { this.state.isSell | this.state.confirming
                ? <View />
                : <Button
                    raised
                    title='Buy'
                    backgroundColor='#2196f3'
                    color='#fff'
                    style={{ marginTop: 10 }}
                    onPress={() => this.triggerBuy()}
                  />
              }
            </View>
        }
        { this.state.isSell && !this.state.confirming
          ? <View style={{ marginTop: 20 }}>
              <Text style={styles.valueLabel}> Total Return: </Text>
              <Text style={styles.value}>{price*this.state.buyQuantity} USD</Text>
              <FormLabel >Quantity</FormLabel>
              <FormInput
                ref={input => this.buyQuantity = input}
                onChangeText={(text) => this.setState({buyQuantity: text})}
              />
              <Button
                style={{ marginTop: 10 }}
                backgroundColor='#00c853'
                title='Confirm'
                onPress={() => {
                  this.setState({
                    confirming: true,
                    isBuy: false,
                    isSell: false,
                    quantity: 0
                  });
                  setTimeout(() => {
                    this.setState({ confirming: false });
                    alert('Your transaction was executed.');
                  }, 1200);
                }}
              />
              <Button
                style={{ marginTop: 10 }}
                backgroundColor='#f4511e'
                title='Cancel'
                onPress={() => this.setState({
                  confirming: false,
                  isBuy: false,
                  isSell: false,
                  buyQuantity: 0}
                )}
              />
            </View>
          : <View>
              { this.state.isBuy | this.state.confirming
              ? <View />
              : <Button
                  raised
                  title='Sell'
                  backgroundColor='#43a047'
                  color='#fff'
                  style={{ marginTop: 5, marginBottom: 10 }}
                  onPress={() => this.triggerSell()}
                />
                }
            </View>
        }
      </Card>
    )
  }
}

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