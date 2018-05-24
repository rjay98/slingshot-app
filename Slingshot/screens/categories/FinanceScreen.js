import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import data from '../../components/company/category_data.json';

export default class CompanyCard extends React.Component {
    render() {
        const { Finance } = data;
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
            <ScrollView>
                { Finance.map(element => {
                    return (
                    <View key={element.name}>
                        <Card 
                        title={element.name}
                        >
                            <Text style={{marginBottom: 10}}>
                            {element.description}
                            </Text>
                            <Button
                            backgroundColor='#03A9F4'
                            //fontFamily='Lato'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW' />
                        </Card>
                    </View>
                )})}
                </ScrollView>
            </View>
        )
    }
    
}
