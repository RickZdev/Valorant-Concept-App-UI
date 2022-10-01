import 'react-native-gesture-handler'
import React from 'react';
import MenuDrawer from './src/navigations/MenuDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { LogBox } from 'react-native';

import COLORS from './src/global/COLORS';

const App = () => {
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor(COLORS.primary);
  LogBox.ignoreAllLogs(true)
  return (
    <NavigationContainer>
      <MenuDrawer />
    </NavigationContainer>
  );
};

export default App;
