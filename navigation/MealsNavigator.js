import {Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
          title : 'Categories Screen'
        }
    },
    Meals: {
        screen: CategoryMealScreen,
        navigationOptions: {
          title : 'Meal Categories'
        }
    },
    MealDetail: { 
        screen: MealDetailsScreen,
    }
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android'? Colors.primaryColor: ''
          },
        headerTintColor: Platform.OS === 'android'? '#fff': Colors.primaryColor
    }
})

export default createAppContainer(MealsNavigator);

