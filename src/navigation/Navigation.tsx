import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Pokemon} from '../screens/Pokemon';
import {SimplePokemon} from '../interfaces/pokemoninterface';

// esto es para la navegacion
export type RootStackParams = {
  Home: undefined;
  Pokemon: {
    simplePokemon: SimplePokemon;
    color: string;
  };
};
const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitle: '',
          contentStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTransparent: true,
            headerTintColor: 'white',
          }}
          name="Pokemon"
          component={Pokemon}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
