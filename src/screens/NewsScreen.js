import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import OulinedText from '../components/OulinedText'
import DATA from '../global/DATA'
import Footer from '../components/Footer'
import { BoxCutOutBottomRight, BoxCutOutTopLeft } from '../components/BoxCutOut'

const NewsScreen = () => {
  return (
    <View className='flex-1 bg-primary pb-16'>
      <OulinedText text='NEWS' size={12}/>
      <FlatList
        data={DATA.news}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card data={item}/>}
      />
      <Footer />
    </View>
  )
}

const Card = ({ data  }) => {
  return (
    <View className='px-5 flex-row mb-5 h-[230px]'>
      {/* left content */}
      <View className='bg-white w-1/2  justify-center items-center'>
        <BoxCutOutTopLeft borderColor={'border-t-primary'} />
        <View className='w-full h-full px-2'>
          <Image
            source={data.image}
            resizeMode='contain'
            className='w-full h-full'
          />
        </View>
      </View>

      {/* right content */}
      <View className='bg-secondary w-1/2 p-5 justify-between space-y-3'>
        <BoxCutOutBottomRight borderColor={'border-b-primary'} />
        <Text className='text-white font-MonumentExtendedRegular text-xs text-center'>{data.headline}</Text>
        <Text className='text-white text-[9px] text-justify font-MontserratLight'>{data.content}</Text>

        {/* read more */}
        <View className='flex-1 justify-end'> 
          <TouchableOpacity className='bg-white'>
            <BoxCutOutTopLeft borderColor={'border-t-secondary'}/>
            <Text className='text-secondary font-MonumentExtendedRegular text-[10px] text-center py-2'>Read More</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default NewsScreen