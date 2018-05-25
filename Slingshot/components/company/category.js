import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon, SearchBar } from 'react-native-elements';
import category_data from './category_data.json';

const images = [
    require('../../static/img/dollar.jpg'),
    require('../../static/img/tech.jpg'),
    require('../../static/img/entertainment.jpg'),
    require('../../static/img/food.jpg'),
    require('../../static/img/shopping.jpg'),
    require('../../static/img/ecommerce.jpg'),
    require('../../static/img/gaming.png'),
    require('../../static/img/education.jpg'),
]
export default class CompanyCard extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <Card>
                    <SearchBar
                        lightTheme
                        inputStyle={{ backgroundColor: 'white' }}
                        containerStyle={{ backgroundColor: 'white', borderColor: 'white' }}
                        placeholder='Search Companies...'
                    />
                </Card>
                { Object.keys(category_data).map((element, id) => {
                    return (
                        <View key={id}>
                            <Card 
                            title={element}
                            image={images[id]}
                            >
                                <Text style={{marginBottom: 10}}>
                                </Text>
                                <Button
                                backgroundColor='#03A9F4'
                                //fontFamily='Lato'
                                onPress={() => { navigate(element) }}
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='VIEW NOW' />
                            </Card>
                        </View>
                    )})}
            </View>
        )
    }
    
}
