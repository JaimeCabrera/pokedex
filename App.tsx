import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {Navigation} from './src/navigation/Navigation';
import {Tabs} from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
export default App;
