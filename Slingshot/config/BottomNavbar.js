import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'react-navigation';

import HomeNav from './HomeNav';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverNav from './DiscoverNav';

export default createBottomTabNavigator(
  {
    Home: {screen: HomeNav},
    Profile: {screen: ProfileScreen},
    Discover: {screen: DiscoverNav}
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