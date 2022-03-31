import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from './Tab1';
import {Search} from '../screens/Search';
import {Pokemon} from '../screens/Pokemon';

const TabStack = createNativeStackNavigator<RootStackParams>();

export const Tab2 = () => {
  return (
    // <NavigationContainer>
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <TabStack.Screen name="Home" component={Search} />
      <TabStack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: 'white',
        }}
        name="Pokemon"
        component={Pokemon}
      />
    </TabStack.Navigator>
    // </NavigationContainer>
  );
};
