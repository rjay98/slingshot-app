import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import BottomNavbar from './config/BottomNavbar';

export default createStackNavigator({
    Login: {screen: LoginScreen},
    userVerified: {screen: BottomNavbar}
  },
  { 
    headerMode: 'none'
  },
);