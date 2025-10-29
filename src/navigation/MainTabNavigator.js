import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import CartStack from './stacks/CartStack';
import HomeStack from './stacks/HomeStack';
import WishlistStack from './stacks/WishlistStack';
import SearchStack from './stacks/SearchStack';
import SettingStack from './stacks/SettingStack';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor:'#f83757',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          // backgroundColor: '#fff',
          borderTopWidth: 0.5,
          height: 60,
          paddingBottom: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'HomeTab':
              return (
                <Ionicons
                  name={focused ? 'storefront' : 'storefront-outline'}
                  size={size}
                  color={color}
                />
              );

            case 'WishlistTab':
              return (<Ionicons
                  name={focused ? 'heart' : 'heart-outline'}
                  size={size}
                  color={color}
                />);
              

            case 'CartTab':
              return (
                <Feather name="shopping-cart" size={24} color={color} />
              );

            case 'SearchTab':
              return (
                <Feather name="search" size={24} color={color} />
              );
            case 'SettingTab':
              return (<Feather name="settings" size={24} color={color} />);

            default:
              return <Ionicons name="ellipse" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="WishlistTab"
        component={WishlistStack}
        options={{ tabBarLabel: 'Wishlist' }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartStack}
        options={{ tabBarLabel: 'Cart' }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStack}
        options={{ tabBarLabel: 'Search' }}
      />
      <Tab.Screen
        name="SettingTab"
        component={SettingStack}
        options={{ tabBarLabel: 'Setting' }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
