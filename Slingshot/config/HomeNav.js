import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import InvestmentsScreen from '../screens/InvestmentsScreen';

export default createStackNavigator({
    Home: {screen: HomeScreen},
    Analytics: {screen: AnalyticsScreen},
    Investments: {screen: InvestmentsScreen},
  },
  { 
    headerMode: 'none'
  },
);