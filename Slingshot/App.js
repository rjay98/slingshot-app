import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';

const App = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
  },
  { mode: 'modal' }
);

export default App;