import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'react-navigation';

import HomeNav from './HomeNav';
import ProfileNav from './ProfileNav';
import DiscoverScreen from '../screens/DiscoverScreen';

export default createBottomTabNavigator(
  {
    Home: {screen: HomeNav},
    Profile: {screen: ProfileNav},
    Discover: {screen: DiscoverScreen}
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Profile') {
          iconName = `account-circle`;
        } else if (routeName === 'Discover') {
          iconName = `view-headline`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)