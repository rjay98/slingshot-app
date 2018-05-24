import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class CompanyCard extends React.Component {
    render() {
        return (
            <Card 
                title='COMPANY CARD 1'
                //image={require('')}
            >
                <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                //fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
            </Card>
        )
    }
    
}
