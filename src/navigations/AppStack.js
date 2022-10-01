import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import HeroScreen from '../screens/HeroScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={HomeScreen}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ presentation: 'card' }} />
      <Stack.Screen name="HeroScreen" component={HeroScreen} options={{ presentation: 'transparentModal' }} />
    </Stack.Navigator>
  )
}

export default AppStack;