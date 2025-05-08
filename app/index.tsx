import CalculatorButton from '@/components/CalculatorButton'
import CustomText from '@/components/CustomText'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

  return (
    <>
    <View style={globalStyles.calculatorContainer}>

      {/* resultados */}
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <CustomText variant='h1'>20x3000000000000</CustomText>
        <CustomText variant='h2' >600</CustomText>
      </View>
    </View>
      {/* botones */}
      <View style={{marginLeft:30, marginRight: 30 } }>
      <View style={globalStyles.row}>
        <CalculatorButton label='C' blackText = {true} color={Colors.lightGray}/>    
        <CalculatorButton label='+/-' blackText = {true} color={Colors.lightGray}/>    
        <CalculatorButton label='del' blackText = {true} color={Colors.lightGray}/>    
        <CalculatorButton label='/' color={Colors.orange}/>    
      </View>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='7' color={Colors.darkGrey}/>    
        <CalculatorButton label='8' color={Colors.darkGrey}/>    
        <CalculatorButton label='9' color={Colors.darkGrey}/>    
        <CalculatorButton label='X' color={Colors.orange}/>    
        
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='4' color={Colors.darkGrey}/>    
        <CalculatorButton label='5' color={Colors.darkGrey}/>    
        <CalculatorButton label='6' color={Colors.darkGrey}/>    
        <CalculatorButton label='-' color={Colors.orange}/>    
        
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='1' color={Colors.darkGrey}/>    
        <CalculatorButton label='2' color={Colors.darkGrey}/>    
        <CalculatorButton label='3' color={Colors.darkGrey}/>    
        <CalculatorButton label='+' color={Colors.orange}/>    
        
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='0' doubleSize={true} color={Colors.darkGrey}/>    
        <CalculatorButton label='.' color={Colors.darkGrey}/>      
        <CalculatorButton label='=' color={Colors.orange}/>    
        
      </View>
      </>


  )
}

export default CalculatorApp