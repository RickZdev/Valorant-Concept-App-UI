import { View, Text, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { BoxCutOutTopLeft } from './BoxCutOut'
import DATA from '../global/DATA'

const AgentCard = () => {
  return (
    <FlatList
      data={DATA.agentCard}
      keyExtractor={item => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      className='mb-20 pl-3.5'
      renderItem={({ item }) => <Card data={item}/>}
    />
  )
}

const Card = ({ data }) => {
  const navigation = useNavigation();
  const { width } =  Dimensions.get('window');
  return (
    <View className='mr-3 mb-2'>
      <TouchableOpacity onPress={() => navigation.navigate('HeroScreen')} className='h-28 bg-[#0F1923] border-2 border-black overflow-hidden' style={{ width: width / 3 - 18}} >
        <BoxCutOutTopLeft borderColor={'border-t-primary'}/>
          <Image
            source={data.image}
            resizeMode='cover'
            className='h-28'
            style={{  width: width / 3 - 18}}
          />
      </TouchableOpacity>
      <Text className='font-MonumentExtendedRegular text-xs text-center mt-2 text-[#0F1923]'>{data.name}</Text>
    </View>
  )
}

export default AgentCard