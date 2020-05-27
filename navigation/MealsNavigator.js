import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: CategoryMealScreen,
    MealDetail: MealDetailsScreen
})

export default createAppContainer(MealsNavigator);

