import { globalStyles } from '@/styles/global-styles';
import { Pressable, Text } from 'react-native';

import * as Haptics from 'expo-haptics';


interface Props {
    label: string
    color?: string
    blackText?: boolean
    doubleSize?: boolean

    // Metodos
    onPress: () => void

}

const CalculatorButton = ({label, onPress, color, blackText = false, doubleSize= false}:Props) => {
  return (
    <Pressable 
        style={({pressed}) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            width: doubleSize ? 180 : 80
        })}
        onPress={() => {
          Haptics.selectionAsync()
          onPress()
        }}
    >
      <Text 
        adjustsFontSizeToFit
        numberOfLines={1}
        style={{
            ...globalStyles.buttonText,
            color: blackText ? 'black' : 'white'
        }}>{label}</Text>
    </Pressable>
  )
}

export default CalculatorButton