import { View, Text, Image } from 'react-native'
import React from 'react'
import OulinedText from '../components/OulinedText'
import Footer from '../components/Footer'
import DATA from '../global/DATA'
import { BoxCutOutTopRight } from '../components/BoxCutOut'

const HeroScreen = () => {
  return (
    <View className='flex-1 bg-primary'>
      {/* cover photo */}
      <OulinedText text='SOVA' size={12}/>
      <Image
        source={require('../assets/images/agent-hero.png')}
        resizeMode='contain'
        className='absolute w-full h-full'
      />
      
      {/* filter */}
      <View className='bg-secondary h-44 w-full -z-30 top-32 absolute' />
      <Image
          source={require('../assets/images/pink-shadow.png')}
          resizeMode='cover'
          className='z-90'
      />

      {/* details */}
      <View className='z-80 absolute w-full bottom-24 '>
          {/* text */}
          <View className='mb-4'>
            <View className='flex-row items-center justify-center space-x-4'>
              <Image
                source={require('../assets/images/initiator-logo.png')}
                resizeMode='contain'
                className='w-8 h-8'
              />
              <Text className='font-MonumentExtendedRegular text-3xl text-white text-center'>Initiator</Text>
            </View>
            <Text className='font-MonumentExtendedRegular text-2xl text-secondary text-center'>Codename: Hunter</Text>
            <Text className='font-MonumentExtendedRegular text-2xl text-secondary text-center'>Country: Russia</Text>
          </View>

          {/* keyboard letter */}
          <View className='z-40 flex-row justify-center space-x-5'>
            {
              DATA.keyboard.map((item) => (
                <View key={item.id}>
                  <View className='bg-white w-16 h-28 border-[2px] border-black' >
                    <BoxCutOutTopRight borderColor={'border-t-primary'}/>
                    <View className='w-9 h-9 bg-secondary justify-center items-center -left-2 mt-4'>
                      <Text className='font-MonumentExtendedRegular text-base text-white'>{item.letter}</Text>
                    </View>
                    <View className='justify-end items-center absolute bottom-2 w-full'>
                      <Image
                        source={item.icon}
                        resizeMode='contain'
                        className='w-8 h-8'
                        />
                    </View>
                  </View>
                  <View className='bg-black w-[5px] h-10 absolute bottom-2 -right-1'/>
                </View>
              ))
            }
          </View>
      </View>
      {/* footer navigation */}
      <Footer />
    </View>
  )
}

export default HeroScreen