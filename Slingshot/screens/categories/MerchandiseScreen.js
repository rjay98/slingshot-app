import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import StockData from '../../components/investments/stockData';
import data from '../../components/company/category_data.json';

export default class CompanyCard extends React.Component {
    render() {
        const { Merchandise } = data;
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Merchandise</Text>
                </View>
                <ScrollView>
                    { Merchandise.map(element => {
                        return (
                            <StockData key={element.name} name={element.name} price={element.price} stockOwned={false}/>
                    )})}
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    titleContainer: {
        height: 100,
        backgroundColor: '#1976d2',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { height: 2 }
    },
    title: {
    color: '#fff',
    marginTop: 30,
    fontSize: 25,
    }
}
