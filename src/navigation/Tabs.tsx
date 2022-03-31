import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2} from './Tab2';
import {Tab1} from './Tab1';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarActiveTintColor: '#21618C',
        tabBarLabelStyle: {
          marginBottom: 10,
          fontSize: 14,
        },
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,.89)',
          position: 'absolute',
          borderWidth: 0,
          borderTopWidth: 0,
          elevation: 0,
          height: 55,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Index"
        component={Tab1}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Tab2}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
