import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import data from '../../components/company/category_data.json';

export default class CompanyCard extends React.Component {
    render() {
        const { Ecommerce } = data;
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>E-Commerce</Text>
            </View>
            <ScrollView>
                { Ecommerce.map(element => {
                    return (
                    <View key={element}>
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

    const styles = StyleSheet.create({
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
    });
    

