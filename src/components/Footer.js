import { View, Text, Image, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View className='bg-secondary flex-row justify-between items-center absolute bottom-0 w-full py-5 px-8 z-100'>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          source={require('../assets/images/valorant-logo.png')}
          resizeMode='contain'
          style={{ width: 22, height: 22}}
          />
      </TouchableOpacity>
      <TouchableOpacity className='bg-white rounded-full p-2' onPress={() => navigation.openDrawer()}>
        <Entypo name="menu" color={COLORS.black} size={17}/>
      </TouchableOpacity>
    </View> 
  )
}

export default Footer