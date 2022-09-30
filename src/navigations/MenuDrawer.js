import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomDrawer from '../components/CustomDrawer'
import COLORS from '../global/COLORS'

import AppStack from './AppStack'
import NewsScreen from '../screens/NewsScreen'

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerPosition: "left",
          drawerType: 'slide',
          drawerLabelStyle: { marginLeft: -20, fontSize: 14, fontFamily: 'Gilroy-ExtraBold' },
          drawerActiveBackgroundColor: COLORS.primary,
          drawerActiveTintColor: COLORS.white,
        }}
        drawerContent={props => <CustomDrawer {...props} />} >
        <Drawer.Screen name="Home" component={AppStack}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color }) => <Fontisto name="home" size={18} color={color} />,
          }} />
        <Drawer.Screen name="NewsScreen" component={NewsScreen}
          options={{
            drawerLabel: 'News',
            drawerIcon: ({ color }) => <Fontisto name="coffeescript" size={18} color={color} />,
          }} />
        {/* <Drawer.Screen name="OrderScreen" component={OrderScreen}
          options={{
            drawerLabel: 'Track My Orders',
            drawerIcon: ({ color }) => <Feather name="package" size={18} color={color} />,
          }} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color }) => <MaterialCommunityIcons name="cog-outline" size={18} color={color} />,
          }} /> */}
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