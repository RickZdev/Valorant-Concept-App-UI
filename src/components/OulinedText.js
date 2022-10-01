import { View, } from 'react-native'
import React from 'react'
import { Svg, Text } from 'react-native-svg'

const OulinedText = ({ text, size }) => {
  return (
    <View className='w-full h-24 top-10 left-6'>
      <Svg height="100%" width="100%" viewBox='0 0 100 5'>
        <Text stroke='white' strokeWidth='0.5' fill={'transparent'} color='#fff' fontSize={size} fontFamily='Druk-Wide-Medium'>{text}</Text>
      </Svg>
    </View>
  )
}

export default OulinedText

