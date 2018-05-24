import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';

export default createStackNavigator({
    Home: {screen: HomeScreen},
    Analytics: {screen: AnalyticsScreen}
  },
  { 
    headerMode: 'none'
  },
);