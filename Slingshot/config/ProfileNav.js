import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import PersonalScreen from '../screens/PersonalScreen';
import BankingScreen from '../screens/BankingScreen';
import AboutScreen from '../screens/AboutScreen';
import LegalScreen from '../screens/LegalScreen';

export default createStackNavigator({
    Profile: {screen: ProfileScreen},
    Personal: {screen: PersonalScreen},
    Banking: {screen: BankingScreen},
    About: {screen: AboutScreen},
    Legal: {screen: LegalScreen}
  },
  { 
    headerMode: 'none'
  },
);