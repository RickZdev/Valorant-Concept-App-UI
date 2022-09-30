import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuDrawer from './src/navigations/MenuDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <MenuDrawer />
    </NavigationContainer>
  );
};

export default App;
