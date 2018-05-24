import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'react-navigation';

import HomeNav from './HomeNav';
import DiscoverNav from './DiscoverNav';
import ProfileNav from './ProfileNav';

export default createBottomTabNavigator(
  {
    Home: {screen: HomeNav},
    Discover: {screen: DiscoverNav},
    Profile: {screen: ProfileNav},
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