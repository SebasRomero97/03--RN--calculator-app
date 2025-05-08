import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as NavigationBar from 'expo-navigation-bar';
import { Platform } from 'react-native';


const isAndroid = Platform.OS === 'android';

if(isAndroid){
  NavigationBar.setBackgroundColorAsync('black');
}

const RootLayout = () => {

  const [] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  
  return (
    <SafeAreaView style={globalStyles.background}>
      <Slot/>
        <StatusBar style='light'/>
      
    </SafeAreaView>
  )
}

export default RootLayout