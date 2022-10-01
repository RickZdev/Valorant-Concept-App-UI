import React from 'react';
import { Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather'
import COLORS from '../global/COLORS';
import AppStack from './AppStack';
import NewsScreen from '../screens/NewsScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={AppStack}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.secondary,
          height: 60,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: {size: 42},
      }}>
      <Tab.Screen name="HomeScreen" component={AppStack} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/valorant-logo.png')}
              resizeMode='contain'
              style={{ width: 22, height: 22}}
            />
          ),
          tabBarItemStyle: {borderTopColor: 2},
        }}
      />

      <Tab.Screen name="News" component={NewsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
