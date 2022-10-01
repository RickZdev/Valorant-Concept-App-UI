import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomDrawer from '../components/CustomDrawer'
import COLORS from '../global/COLORS'

import AppStack from './AppStack'
import AgentsDrawer from '../screens/AgentsDrawer'
import NewsScreen from '../screens/NewsScreen'
import PatchDrawer from '../screens/PatchDrawer'
import DiscoverDrawer from '../screens/DiscoverDrawer'
import EsportsDrawer from '../screens/EsportsDrawer'

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: COLORS.secondary,
          },
          drawerItemStyle: {
            borderBottomColor: '#2A343E',
            borderBottomWidth: 2,
            padding: 0,
          },
          headerShown: false,
          drawerPosition: "right",
          drawerType: 'slide',
          drawerLabelStyle: { marginLeft: 10, fontSize: 20, fontFamily: 'MonumentExtended-Regular' },
          drawerActiveBackgroundColor: COLORS.primary,
          drawerActiveTintColor: COLORS.secondary,
          drawerInactiveTintColor: COLORS.white,
        }}
        drawerContent={props => <CustomDrawer {...props} />} 
        >
        <Drawer.Screen name="Game" component={AppStack} 
          options={{
            drawerLabel: 'GAME'
          }}
        />
        <Drawer.Screen name="Agents" component={AgentsDrawer} 
          options={{
            drawerLabel: 'AGENTS'
          }}
        />
        <Drawer.Screen name="News" component={NewsScreen} 
          options={{
            drawerLabel: 'NEWS',
            // drawerIcon: ({ focused }) => <Entypo name="triangle-right" size={18} color={focused ? COLORS.secondary : COLORS.primary} />,
          }}
        />
        <Drawer.Screen name="Patch" component={PatchDrawer} 
          options={{
            drawerLabel: 'PATCH'
          }}
        />
        <Drawer.Screen name="Discover" component={DiscoverDrawer} 
          options={{
            drawerLabel: 'DISCOVER'
          }}
        />
        <Drawer.Screen name="Esports" component={EsportsDrawer} 
          options={{
            drawerLabel: 'ESPORTS'
          }}
        />
      </Drawer.Navigator>
    </View>
  )
}

export default MenuDrawer

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0, bottom: 0, right: 0, left: 0,
    zIndex: -1,
    backgroundColor: COLORS.white,
  }
})