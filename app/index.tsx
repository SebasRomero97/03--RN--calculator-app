import CustomText from '@/components/CustomText'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

  return (
    <View style={globalStyles.calculatorContainer}>

      {/* resultados */}
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <CustomText variant='h1'>20x3000000000000</CustomText>
        <CustomText variant='h2' >600</CustomText>
      </View>

    {/* botones */}
    



    </View>
  )
}

export default CalculatorApp