import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WishlistScreen from '../../screens/WishlistScreen';

const Stack = createNativeStackNavigator();
const WishlistStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Wishlist' component={WishlistScreen}/>
    </Stack.Navigator>
  );
};

export default WishlistStack