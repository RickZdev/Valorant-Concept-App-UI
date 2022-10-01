import { View, Text, FlatList, Image} from 'react-native'
import React from 'react'
import DATA from '../global/DATA'
import OulinedText from './OulinedText'

const AgentList = () => {
  return (
    <View>
      <FlatList
        data={DATA.agent}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <Card data={item} index={index}/>}
      />
    </View>
  )
}

const Card = ({ data, index }) => {
  return (
    <View className='p-5'>
      <View className='bg-secondary w-48 h-[400px] rounded-lg' style={{ marginLeft: index === 0 ? 20 : 0}}>
          {/* text */}
          <View style={{transform: [{ rotate: '90deg'}], }} className='pt-[140px] -pl-20'>
            <Text className='text-[13px] font-DrukWideMedium text-primary absolute bottom-11 left-7'>{data.country}</Text>
            <OulinedText text={data.name} size={15}/>
          </View>
          
          {/* image */}
          <Image
            source={data.image}
            resizeMode='cover'
            className='w-full h-full absolute overflow-visible '
          />

          {/* abilities */}
          <View className='flex-row justify-center items-center bg-secondary absolute -bottom-5 left-3 w-full z-20 border-2 border-white p-1 border-corner after:'>
            <Image
              source={data.abilities}
              resizeMode='contain'
              className='w-40 h-8'
            />
          </View>
        </View>
      </View>
  )
}

export default AgentList