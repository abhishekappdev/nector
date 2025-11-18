import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../../screens/SearchScreen';

const Stack = createNativeStackNavigator();
const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Search' component={SearchScreen}/>
    </Stack.Navigator>
  );
};

export default SearchStack