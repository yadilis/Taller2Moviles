import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../../theme/appTheme'
import { Text } from 'react-native'
interface Props{
    textButton:string;
    onPress:()=>void;
}
export const ButtonComponent = ({textButton,onPress}:Props) => {
  return (
   <TouchableOpacity
   onPress={onPress}
   style={styles.button}>
    <Text style={styles.buttonText}>{textButton}</Text>
       

   </TouchableOpacity>
  )
}
