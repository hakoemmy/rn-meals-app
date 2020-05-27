import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meals Screen!</Text>
            <Button title="View detail" onPress={() => {
                props.navigation.navigate('MealDetail');
            }}/>
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

export default CategoryMealsScreen;
