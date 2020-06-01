import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/dummyData';
const MealDetailsScreen = props => {
    
    const catId = props.navigation.getParam('categoryId');
    const category = CATEGORIES.find( cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text> categoryId: {category.title} </Text>
            <Text>The Meal Details Screen!</Text>
        </View>
     );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

MealDetailsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const category = CATEGORIES.find( cat => cat.id === catId);
   
    return {
        title: category.title
    }
}

export default MealDetailsScreen;
