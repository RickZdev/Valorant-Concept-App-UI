import { View } from 'react-native'
import React from 'react'

const BoxCutOutTopLeft = ({ borderColor }) => {
  return (
    <View className={`absolute top-0 left-0 border-r-[10px] border-t-[10px] ${borderColor} border-r-transparent`}/>
  )
}

const BoxCutOutTopRight = ({ borderColor }) => {
  return (
    <View className={`absolute top-0 right-0 border-l-[10px] border-t-[10px]  ${borderColor} border-l-transparent`}/>
  )
}

const BoxCutOutBottomLeft = ({ borderColor }) => {
  return (
    <View className={`absolute bottom-0 left-0 border-r-[10px] border-b-[10px] ${borderColor} border-r-transparent`}/>
  )
}

const BoxCutOutBottomRight = ({ borderColor }) => {
  return (
    <View className={`absolute bottom-0 right-0 border-l-[10px] border-b-[10px] ${borderColor} border-l-transparent`}/>
  )
}


export { BoxCutOutTopLeft, BoxCutOutTopRight, BoxCutOutBottomLeft, BoxCutOutBottomRight }