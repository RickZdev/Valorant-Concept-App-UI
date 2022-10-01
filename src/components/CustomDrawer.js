import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import COLORS from '../global/COLORS'

const CustomDrawer = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.footerContainer} >
        <TouchableOpacity className='bg-white rounded-full p-2' onPress={() => props.navigation.closeDrawer()}>
          <Entypo name="cross" color={COLORS.black} size={20}/>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
    paddingRight: 35,
    borderColor: 'black'
  },
  logoutText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 12,
    letterSpacing: 1,
    paddingLeft: 10,
  },
})