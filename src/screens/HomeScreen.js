import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

import AgentList from '../components/AgentList'
import AgentCard from '../components/AgentCard'
import Footer from '../components/Footer'
import OulinedText from '../components/OulinedText'
import COLORS from '../global/COLORS'
import { BoxCutOutBottomRight, BoxCutOutTopLeft } from '../components/BoxCutOut'

const HomeScreen = ({ navigation }) => {
  return (
    <View className='flex-1'>
      <ScrollView className='bg-primary' alwaysBounceVertical={true} bounces={true}>
        <OulinedText text='AGENTS' size={12}/>
        {/* agents */}
        <AgentList />

        {/* search */}
        <View className='bg-secondary mx-[30px] my-[20px] flex-row px-3'>
          <View className='flex-row items-center space-x-2 mr-2'>
            <Feather name='search' size={15} color='white'/>
            <Text className='mr-2 text-white font-MonumentExtendedRegular text-[10px]'>Search</Text>
            <View className='bg-white py-3 w-0.5'/>
          </View>
          <TextInput className='text-white font-MonumentExtendedRegular text-[10px] pr-32'/>
          <BoxCutOutTopLeft borderColor={'border-t-primary'}/>
          <BoxCutOutBottomRight borderColor={'border-b-primary'}/>
        </View>

        {/* agent list */}
        <AgentCard />
      </ScrollView>

      {/* footer navigation */}
      <Footer />
    </View>
  )
}

export default HomeScreen