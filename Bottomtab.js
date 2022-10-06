import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from './Profile';
import Dashboard from './Dashboard';
import Cart from './Cart';
import Accountdetails from './Accountdetails';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Bottomtab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: 'false',
        tabBarShowLable: 'false',
        tabBarStyle: {
          backgroundColor: '#3F4BD8',
          inactiveColor: '#3e2465',
          
          
          borderTopEndRadius: 20,
          borderTopLeftRadius: 20,
        },

        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: {backgroundColor: 'tomato'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="layers" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Accountdetails"
        component={Accountdetails}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ribbon" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomtab;
