import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverScreen from '../screens/DiscoverScreen';

export default createBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Discover: {screen: DiscoverScreen}
  }
)