import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import { Text, TextProps } from 'react-native'

interface Props extends TextProps {
    variant?: 'h1' | 'h2'
    color?: string 
}

const CustomText = ({children, variant, color=Colors.textPrimary, ...rest}:Props) => {
  return (
      <Text
        style={[
            {color:color}, 
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult,

        ]}
        adjustsFontSizeToFit
        numberOfLines={1}
        
        {...rest}
      >{children}</Text>
  )
}

export default CustomText