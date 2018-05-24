import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import data from './data.json';

export default class CompanyCard extends React.Component {
    render() {
        const { companies } = data;
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
            <ScrollView>
                { companies.map(element => {
                    return (
                    <View>
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
