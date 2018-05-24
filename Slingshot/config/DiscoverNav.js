import React from 'react';
import { createStackNavigator } from 'react-navigation';

import CategoryScreen from '../screens/CategoryScreen';
import FinanceScreen from '../screens/categories/FinanceScreen';
import TechnologyScreen from '../screens/categories/TechnologyScreen';
import EcommerceScreen from '../screens/categories/EcommerceScreen';
import EducationScreen from '../screens/categories/EducationScreen';
import EntertainmentScreen from '../screens/categories/EntertainmentScreen';
import FoodScreen from '../screens/categories/FoodScreen';
import GamingScreen from '../screens/categories/GamingScreen';
import MerchandiseScreen from '../screens/categories/MerchandiseScreen';

export default createStackNavigator({
    Category: {screen: CategoryScreen},
    Finance: {screen: FinanceScreen},
    Technology: {screen: TechnologyScreen},
    Ecommerce: {screen: EcommerceScreen},
    Education: {screen: EducationScreen},
    Entertainment: {screen: EntertainmentScreen},
    Food: {screen: FoodScreen},
    Gaming: {screen: GamingScreen},
    Merchandise: {screen: MerchandiseScreen}
},
{
    headerMode: 'none'
}
);