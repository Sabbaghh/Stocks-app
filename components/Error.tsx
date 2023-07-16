import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Error = () => {
  return (
    <View style={{backgroundColor: Colors.light.background, justifyContent:'center', alignItems:'center', flex:1}}>
      <Text>Ops.. Something went wrong!!!</Text>
    </View>
  )
}

export default Error