import CalculatorButton from '@/components/CalculatorButton'
import CustomText from '@/components/CustomText'
import { Colors } from '@/constants/Colors'
import { useCalculatorLogic } from '@/hooks/useCalculatorLogic'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

  const {divideOperator,number, calcularResultado, buildNumber, reset, toggleSign, multiplyOperator, addOperator, substractOperator, formula, prevNumber, delOperator} = useCalculatorLogic()

  return (
    <>
    <View style={globalStyles.calculatorContainer}>

      {/* resultados */}
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <CustomText variant='h1'>{formula}</CustomText>

        {prevNumber !== number
          ?<CustomText variant='h2' >{prevNumber}</CustomText>
          :<CustomText variant='h2' > </CustomText>
        }
      </View>
    </View>
      {/* botones */}
      <View style={{marginLeft:30, marginRight: 30 } }>
      <View style={globalStyles.row}>
        <CalculatorButton label='C' onPress={() => reset()} blackText = {true} color={Colors.lightGray}/>    
        <CalculatorButton label='+/-' onPress={() => toggleSign()} blackText = {true} color={Colors.lightGray}/>    
        <CalculatorButton label='del' onPress={delOperator} blackText = {true} color={Colors.lightGray}/>    
        <CalculatorButton label='/' onPress={divideOperator} color={Colors.orange}/>    
      </View>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='7' onPress={() => buildNumber('7')} color={Colors.darkGrey}/>    
        <CalculatorButton label='8' onPress={() => buildNumber('8')} color={Colors.darkGrey}/>    
        <CalculatorButton label='9' onPress={() => buildNumber('9')} color={Colors.darkGrey}/>    
        <CalculatorButton label='X' onPress={multiplyOperator} color={Colors.orange}/>    
        
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='4' onPress={() => buildNumber('4')} color={Colors.darkGrey}/>    
        <CalculatorButton label='5' onPress={() => buildNumber('5')} color={Colors.darkGrey}/>    
        <CalculatorButton label='6' onPress={() => buildNumber('6')} color={Colors.darkGrey}/>    
        <CalculatorButton label='-' onPress={substractOperator} color={Colors.orange}/>    
        
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='1' onPress={() => buildNumber('1')} color={Colors.darkGrey}/>    
        <CalculatorButton label='2' onPress={() => buildNumber('2')} color={Colors.darkGrey}/>    
        <CalculatorButton label='3' onPress={() => buildNumber('3')} color={Colors.darkGrey}/>    
        <CalculatorButton label='+' onPress={addOperator} color={Colors.orange}/>    
        
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='0' doubleSize={true} onPress={() => buildNumber('0')} color={Colors.darkGrey}/>    
        <CalculatorButton label='.' onPress={() => buildNumber('.')} color={Colors.darkGrey}/>      
        <CalculatorButton label='=' onPress={calcularResultado} color={Colors.orange}/>    
        
      </View>
      </>


  )
}

export default CalculatorApp