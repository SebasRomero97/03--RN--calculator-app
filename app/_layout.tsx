import { Slot } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const _layout = () => {
  return (
    <View>
      <Text>RootLayout!!!</Text>
      <Slot/>
      <Text>Footer layout</Text>
    </View>
  )
}

export default _layout